const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// Funkcja skanująca katalog w poszukiwaniu plików HTML
const generateHtmlPlugins = (templateDir) => {
  // Odczytaj pliki w folderze
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  
  return templateFiles
    .filter(item => item.endsWith('.html')) // Wybierz tylko pliki .html
    .map(item => {
      return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, templateDir, item),
        filename: item,
        chunks: ['main'], // Jeśli wszystkie strony mają używać tego samego bundle'a
      });
    });
};

const htmlPlugins = generateHtmlPlugins('.'); // Kropka, pliki są w głównym folderze

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].chunk.js',
    clean: true,
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
  },
  mode: process.env.NODE_ENV || 'production',
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      // Middleware do obsługi błędów 404
      middlewares.push({
        name: 'handle-404',
        path: '/',
        middleware: (req, res, next) => {
          // Jeśli plik nie istnieje i nie jest zasobem statycznym, podaj 404.html
          if (!req.path.includes('.') && req.method === 'GET') {
            return res.sendFile(path.join(__dirname, 'dist', '404.html'));
          }
          next();
        },
      });
      return middlewares;
    },
    // Wycisz warningi w dev server
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
              // Wycisz deprecation warnings z zależności (np. Bootstrap)
              sassOptions: {
                quietDeps: true,
                silenceDeprecations: ['legacy-js-api', 'import'],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb - images smaller than 8kb will be inlined
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
    ],
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/images'),
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss', '.css'],
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: process.env.NODE_ENV === 'production' ? [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log in production
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
          },
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ] : [],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          reuseExistingChunk: true,
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    usedExports: true,
    sideEffects: false,
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // Wycisz warningi z zależności (np. Bootstrap deprecation warnings)
  ignoreWarnings: [
    // Wszystkie deprecation warnings z node_modules
    {
      module: /node_modules/,
      message: /deprecated/i,
    },
    // Wszystkie warningi z Bootstrap
    {
      module: /node_modules\/bootstrap/,
    },
    // Sass deprecation warnings
    /Sass.*deprecation/i,
    /@import.*deprecated/i,
    // Bootstrap specific warnings
    /bootstrap.*deprecated/i,
    /legacy-js-api/i,
    // QuietDeps warnings from Sass
    /quietDeps/i,
  ],
  // Dodatkowe filtrowanie w stats (dla dev server) - wycisz wszystkie warningi z node_modules
  stats: {
    warningsFilter: [
      /node_modules/,
      /deprecated/i,
      /bootstrap/i,
      /Sass/i,
      /@import/i,
      /legacy/i,
    ],
  },
};

