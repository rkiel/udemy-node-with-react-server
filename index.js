const express = require('express');

const app = express();

function getSlash(req, res) {
  res.send({ hi: 'there' });
}

app.get('/', getSlash);

const PORT = process.env.PORT || 5000; // Heroku

app.listen(PORT);
