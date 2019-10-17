const db = require('../data/dbConfig.js');

module.exports = {
  add,
  update,
  getAll,
  remove,
  findById,
}

function add(cat) {
  return null;
}

function update(id, changes) {
  return null;
}

function getAll() {
  return db('cats');
}

function remove(id) {
  return null;
}

function findById(id) {
  return null;
}