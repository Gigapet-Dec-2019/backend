
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_name: 'steak'},
        {ingredient_name: 'pepper jack cheese'},
        {ingredient_name: 'pineapple juice'},
      ]);
    });
};
