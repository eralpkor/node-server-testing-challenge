
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {name: 'sunny', age: 2, gender: 'male'},
        {name: 'norman', age: 5, gender: 'male'},
        {name: 'fluffy', age: 10, gender: 'female'}
      ]);
    });
};
