
exports.seed = function(knex) {

  return knex('recipe_ingredients').truncate()
    .then(function () {
     
      return knex('recipe_ingredients').insert([
        { 
          chef_id: 1,
          recipe_id: 1,
          measurement_qty_id: 1, 
          measurement_id: 1,
          ingredient_id: 1},

          {
            chef_id: 2,
            recipe_id: 2,
            measurement_qty_id: 2, 
            measurement_id: 2,
            ingredient_id: 2},

          {chef_id: 3,
            recipe_id: 3,
            measurement_qty_id: 3, 
            measurement_id: 3,
            ingredient_id: 3},
        
      ]);
    });
};
