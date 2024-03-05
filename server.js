const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Usa la variabile d'ambiente PORT o la porta 3000 come predefinita

app.use(express.static(__dirname));


app.get('/', (req, res) => {
  const clientOs = req.headers['user-agent'];

  let indexFile;

  if (clientOs.includes('Windows NT')) {
    indexFile = 'index2.html';
  } else if (/iPhone|iPad|iPod/i.test(clientOs)) {
    indexFile = 'index1.html';
  } else if (/Android/i.test(clientOs)) {
    indexFile = 'index1.html';
  } else if (clientOs.includes('Mac OS X')) {
    indexFile = 'index2.html';
  } else if (clientOs.includes('Linux')) {
    indexFile = 'index2.html';
  } else {
       console.log('DEFAULT\n'); 
    indexFile = 'index2.html';

  }

  console.log(`Sistema operativo rilevato: ${clientOs}`);

  //res.sendFile(path.join(__dirname, indexFile), (err) => {
    res.sendFile(indexFile, { root: __dirname });
    /*if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });*/
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
