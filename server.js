const express = require('express');
const app = express();
const path = require('path');
const userAgent = require('express-useragent');
const port = 3000;

app.use(express.static(__dirname));

// Middleware per l'analisi dell'user agent
app.use(userAgent.express());

app.get('/', (req, res) => {
  // Ottieni l'user agent dal request
  const ua = req.useragent;

  // Controlla se si tratta di un dispositivo mobile
  if (ua.isMobile) {
    // Restituisci il file index per dispositivi mobili
    res.sendFile(path.join(__dirname, './dist/index.html'));
  } else {
    // Restituisci il file index per PC
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
