# AGAVA NOVA RESORT - Strona Internetowa

Nowoczesna, responsywna strona internetowa dla ośrodka wypoczynkowego AGAVA NOVA RESORT w Przełazach. Strona została zbudowana przy użyciu HTML5, SCSS, JavaScript oraz nowoczesnych narzędzi jak Webpack, Bootstrap 5 i Swiper.js.

## 📋 Spis Treści

- [Opis](#opis)
- [Cechy](#cechy)
- [Technologie](#technologie)
- [Struktura Projektu](#struktura-projektu)
- [Instalacja](#instalacja)
- [Użycie](#użycie)
- [Build](#build)
- [Licencja](#licencja)
- [Autor](#autor)

## 📝 Opis

Strona internetowa prezentująca kompleks wypoczynkowy AGAVA NOVA RESORT, oferujący:
- Ekskluzywne domy modułowe
- Restaurację i bar z grillem
- Apartamenty
- SPA & Wellness
- Różnorodne atrakcje (Mini Golf, Plaża, Mini Amfiteatr)
- Informacje kontaktowe i lokalizację

Strona została zoptymalizowana pod kątem SEO, wydajności i dostępności, wykorzystując najlepsze praktyki web development.

## ✨ Cechy

### Design i UX
- **Responsywny design** - działa na wszystkich urządzeniach (desktop, tablet, mobile)
- **Nowoczesny interfejs** - elegancki design z ciemnymi i jasnymi sekcjami
- **Płynne animacje** - przejścia i efekty hover dla lepszego UX
- **Bootstrap Grid System** - profesjonalny układ strony
- **Bootstrap Tabs** - dynamiczne przełączanie treści

### Funkcjonalności
- **Hero Slider** - pełnoekranowy slider z efektem fade (3 slajdy)
- **Swiper.js** - responsywne sliders dla sekcji Aktualności i Atrakcje
- **Dynamiczne menu** - dropdown menu z efektem hover (desktop) i toggle (mobile)
- **Bootstrap Tabs** - przełączanie między Restauracją, Bare & Grillem i Apartamentami
- **Specyfikacje** - interaktywne zakładki z planami mieszkania
- **Google Maps** - zintegrowana mapa lokalizacji
- **Lazy Loading** - opóźnione ładowanie obrazów dla lepszej wydajności

### SEO i Wydajność
- **Meta tagi SEO** - kompletne tagi dla wyszukiwarek
- **Open Graph** - optymalizacja dla Facebook i social media
- **Twitter Cards** - optymalizacja dla Twitter
- **Schema.org JSON-LD** - structured data (Resort, Organization, BreadcrumbList)
- **Canonical URL** - zapobieganie duplicate content
- **Preconnect/DNS-prefetch** - szybsze ładowanie zewnętrznych zasobów
- **Webpack Optimization** - cache, minification, code splitting
- **Contenthash** - cache busting dla assetów

### Techniczne
- **Webpack 5** - bundling i optymalizacja
- **SCSS** - preprocessor CSS z zmiennymi i mixinami
- **Babel** - transpilacja JavaScript (ES6+)
- **Source Maps** - debugging w development
- **Hot Module Replacement** - szybki development z HMR
- **Code Splitting** - automatyczny podział kodu (vendors, runtime, main)

## 🛠 Technologie

### Core
- **HTML5** - semantyczna struktura strony
- **SCSS/Sass** - preprocessor CSS
- **JavaScript (ES6+)** - nowoczesny JavaScript
- **Node.js & npm** - zarządzanie zależnościami

### Frameworki i Biblioteki
- **Bootstrap 5.3.8** - Grid System, Tabs, Dropdowns
- **Swiper.js 12.0.3** - responsywne sliders (Pagination, Autoplay, EffectFade)
- **Font Awesome 6.5.1** - ikony

### Narzędzia Build
- **Webpack 5.104.1** - bundler i task runner
- **Babel** - transpilacja JavaScript
- **TerserPlugin** - minifikacja JavaScript
- **CssMinimizerPlugin** - minifikacja CSS
- **Sass-loader** - kompilacja SCSS
- **HtmlWebpackPlugin** - generowanie HTML
- **MiniCssExtractPlugin** - ekstrakcja CSS
- **CopyWebpackPlugin** - kopiowanie statycznych assetów

## 📁 Struktura Projektu

```
html/
├── dist/                    # Zbudowana wersja produkcyjna (generowana automatycznie)
│   ├── css/                 # Zminifikowane pliki CSS
│   ├── js/                  # Zminifikowane pliki JavaScript
│   ├── images/              # Obrazy (logo, etc.)
│   ├── fonts/               # Fonty Font Awesome
│   └── index.html           # Zbudowany plik HTML
│
├── src/                     # Folder źródłowy
│   ├── js/                  # Pliki JavaScript
│   │   ├── index.js         # Punkt wejścia (importy)
│   │   └── script.js        # Główna logika aplikacji
│   ├── scss/                # Pliki SCSS
│   │   ├── _variables.scss  # Zmienne SCSS (kolory, fonty, etc.)
│   │   └── styles.scss      # Główne style (importuje Bootstrap i zmienne)
│   └── img/                 # Obrazy źródłowe
│       ├── logo.png         # Logo ośrodka
│       └── slider/          # Obrazy sliderów (jeśli są)
│
├── index.html               # Szablon HTML (używany przez Webpack)
├── package.json             # Zależności i skrypty npm
├── webpack.config.js        # Konfiguracja Webpack
├── .gitignore              # Pliki ignorowane przez Git
└── README.md               # Ten plik
```

## 🚀 Instalacja

### Wymagania

- **Node.js** (wersja 14.x lub wyższa)
- **npm** (zazwyczaj dołączony do Node.js) lub **yarn**

### Kroki Instalacji

1. **Sklonuj repozytorium** (jeśli korzystasz z Git):
   ```bash
   git clone https://github.com/gmaxsoft/html5_website.git
   cd html5_website
   ```

2. **Zainstaluj zależności**:
   ```bash
   npm install
   ```
   To zainstaluje wszystkie wymagane pakiety z `package.json` do folderu `node_modules/`.

3. **Gotowe!** Możesz teraz używać skryptów npm opisanych poniżej.

## 💻 Użycie

### Development Mode (Tryb Deweloperski)

Uruchom serwer deweloperski z hot reload:
```bash
npm start
```
Lub:
```bash
npm run dev
```

To uruchomi Webpack Dev Server na `http://localhost:9000` (automatycznie otworzy przeglądarkę).

**Cechy development mode:**
- Hot Module Replacement (HMR) - zmiany widoczne natychmiast
- Source Maps - łatwiejsze debugowanie
- Szczegółowe komunikaty błędów
- Automatyczne odświeżanie przeglądarki

### Watch Mode (Tryb Śledzenia)

Uruchom Webpack w trybie watch (automatyczna kompilacja przy zmianach):
```bash
npm run watch
```

### Build Production (Build Produkcyjny)

Zbuduj zoptymalizowaną wersję produkcyjną:
```bash
npm run build
```

To utworzy folder `dist/` z:
- Zminifikowanym JavaScript i CSS
- Zoptymalizowanymi obrazami
- Skopiowanymi fontami
- Zoptymalizowanym HTML
- Source maps dla production

**Optymalizacje production:**
- Minifikacja JavaScript (TerserPlugin)
- Minifikacja CSS (CssMinimizerPlugin)
- Usunięcie console.log
- Code splitting (vendors, runtime, main)
- Contenthash dla cache busting
- Tree shaking
- Kompresja assetów

## 📦 Build Output

Po uruchomieniu `npm run build`, struktura folderu `dist/` będzie wyglądać tak:

```
dist/
├── css/
│   ├── main.[contenthash].css          # Główne style
│   ├── vendors.[contenthash].css       # Style z node_modules
│   └── *.css.map                       # Source maps
├── js/
│   ├── main.[contenthash].js           # Główny kod aplikacji
│   ├── vendors.[contenthash].js        # Biblioteki (Bootstrap, Swiper, etc.)
│   ├── runtime.[contenthash].js        # Runtime Webpack
│   └── *.js.map                        # Source maps
├── images/
│   └── logo.png                        # Obrazy
├── fonts/
│   └── *.woff2, *.ttf                 # Fonty Font Awesome
└── index.html                          # Zoptymalizowany HTML
```

## 🎨 Sekcje Strony

1. **Hero Slider** - Główny baner z 3 slajdami (Swiper z efektem fade)
2. **O nas** - Informacje o ośrodku z kolażem obrazów
3. **Domy wypoczynkowe** - Prezentacja domów z dwoma obrazami i specyfikacjami
4. **Specyfikacje** - Bootstrap Tabs z planami mieszkania (Parter, Pietro, Antresola, Video)
5. **Restauracja** - Bootstrap Tabs (Restauracja, Bar i Grill, Apartamenty) z dynamicznymi obrazami
6. **Atrakcje** - Swiper slider z 6 kartami atrakcji (3 widoczne)
7. **Aktualności** - Swiper slider z 5 kartami newsów
8. **Google Maps** - Mapa lokalizacji ośrodka
9. **Footer** - Stopka z logo, linkami i ikonami social media

## 🔧 Konfiguracja Webpack

Webpack jest skonfigurowany z następującymi optymalizacjami:

- **Cache Filesystem** - długoterminowe cache dla szybszych rebuildów
- **Code Splitting** - automatyczny podział na chunks (vendors, common, runtime)
- **Minification** - tylko w trybie production
- **Source Maps** - dla development i production
- **Asset Optimization** - obrazy < 8kb są inlinowane jako base64
- **Contenthash** - unikalne hash'e dla cache busting

## 📱 Responsywność

Strona jest w pełni responsywna z breakpointami:
- **Desktop**: ≥ 992px (lg)
- **Tablet**: 768px - 991px (md)
- **Mobile**: < 768px (sm, xs)

## 🌐 Przeglądarki

Strona została przetestowana i działa w:
- Chrome (ostatnia wersja)
- Firefox (ostatnia wersja)
- Edge (ostatnia wersja)
- Safari (ostatnia wersja)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Licencja

Ten projekt jest dostępny na licencji MIT.

```
MIT License

Copyright (c) 2024 Maxsoft

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Autor

**Maxsoft**

- Projekt: AGAVA NOVA RESORT Website
- Repozytorium: https://github.com/gmaxsoft/html5_website.git

## 📞 Kontakt

W przypadku pytań lub problemów, proszę o kontakt przez repozytorium GitHub.

---

**Uwaga:** Pamiętaj, aby uruchomić `npm install` przed pierwszym użyciem projektu!


