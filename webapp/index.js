const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/request', (req, res) => {
  request('https://www.google.jp', (error, response, body) => {
    if (error) {
      res.status(500).send('Error fetching google.jp');
    } else {
      res.send(response.body);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
