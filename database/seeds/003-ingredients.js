
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {
          ingredient_id: 1, 
          ingredient_qty:"4 oz", 
          ingredient_name: 'steak'},

        {
          ingredient_id: 2, 
          ingredient_qty:"16 oz",
          ingredient_name: 'pepper jack cheese'},

        { 
          ingredient_id: 3, 
          ingredient_qty:"8 oz",
          ingredient_name: 'pineapple juice'},
      ]);
    });
};
