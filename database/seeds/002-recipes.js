
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: 'Garlic-Butter Steak', description: 'This quick-and-easy steak skillet entree'},

        {recipe_name: 'Low Carb Vegetarian Chile Rellenos Bake', 
        description: 'Delicious as the Chile Rellenos you get in a restaurant; eat this as a casserole or cut into small pieces and serve with toothpicks as an appetizer'},

        {recipe_name: 'Malibu Bay Breeze', description: 'Delicious and easy drink, made with only 3 ingredients: Malibu, pineapple juice and cranberry juice'},
      ]);
    });
};
