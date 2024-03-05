const express = require('express');
const app = express();
const path = require('path');
const userAgent = require('express-useragent');
const port = 3000;
const os = require('os');
const uaParser = require('ua-parser-js');

app.use(express.static(__dirname));

// Middleware per l'analisi dell'user agent
app.use(userAgent.express());

app.get('/', (req, res) => {
  // Ottieni il sistema operativo del client
  const clientOs = os.platform();
  // Stampa il tipo di casa scelto
  console.log(`Sistema Operartivo: ${clientOs}`);
  // Seleziona l'index in base al sistema operativo
  /*
  let indexFile;
  switch (clientOs) {
    case 'win32':
      indexFile = 'index.html';
      break;
    case 'linux':
      indexFile = 'index.html';
      break;
    case 'darwin':
      indexFile = 'index.html';
      break;
    case 'ios':
      indexFile = 'index1.html';
      break;
    case 'android':
      indexFile = 'index1.html';
      break;
    default:
      indexFile = 'index.html';
    break;
  }
  if (err) {
    console.error(err); // Log any errors in sending the file
  } else {
    console.log(`Sent index file: ${indexFile}`);
  }
  // Invia l'index appropriato
  res.sendFile(indexFile, { root: __dirname });*/
});

app.get('/ciao', (req, res) => {
  // Restituisce il file index
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.get('/test', (req, res) => {
  // Ottieni informazioni sul sistema operativo del client
  const clientOs = os.platform();

  // Restituisci una risposta con il sistema operativo del client
  console.log(`Il tuo sistema operativo è: ${clientOs}`);
});


app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
