const express = require('express');

const Cats = require('../cats/cats-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up'});
});

server.get('/cats', (req, res) => {
  Cats.getAll()
    .then(cats => {
      res.status(200).json(rows)
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = server;