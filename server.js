const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serwuj pliki statyczne z folderu dist
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware do obsługi HTML pages (SPA routing)
app.get('/*', (req, res) => {
  // Sprawdź czy plik istnieje
  const filePath = path.join(__dirname, 'dist', req.path);
  
  // Jeśli ścieżka zawiera rozszerzenie pliku, spróbuj go serwować
  if (path.extname(req.path)) {
    return res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
  }
  
  // Dla ścieżek bez rozszerzenia (np. /test), sprawdź czy HTML istnieje
  const htmlPath = path.join(__dirname, 'dist', req.path + '.html');
  
  if (fs.existsSync(htmlPath)) {
    return res.sendFile(htmlPath);
  }
  
  // Jeśli nic nie znaleziono, serwuj 404.html
  res.status(404).sendFile(path.join(__dirname, 'dist', '404.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, 'dist', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open browser at http://localhost:${PORT}`);
});
