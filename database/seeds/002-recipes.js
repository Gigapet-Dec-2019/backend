
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
      {
          title: 'Garlic-Butter Steak',
          meal_type:'Dinner', 
          description: 'This quick-and-easy steak skillet entree',
          user_id: 1
      },
      {
        title: 'user 1 recipe test2',
        meal_type:'Dinner', 
        description: 'This quick-and-easy steak skillet entree',
        user_id: 1
      },
      {
      title: 'user 1 recipe test3',
      meal_type:'Dinner', 
      description: 'This quick-and-easy steak skillet entree',
      user_id: 1
      },

      {
          title: 'Low Carb Vegetarian Chile Rellenos Bake', 
          meal_type:'Lunch', 
          description: 'Delicious as the Chile Rellenos you get in a restaurant; eat this as a casserole or cut into small pieces and serve with toothpicks as an appetizer',
          user_id: 2
      },

      {
          title: 'Malibu Bay Breeze', 
          meal_type:'Drink', 
          description: 'Delicious and easy drink, made with only 3 ingredients: Malibu, pineapple juice and cranberry juice',
          user_id: 3
      },
      ]);
    });
};
