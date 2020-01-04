
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {
          ingredient_id: 1, 
          ingredient_name: 
            '4oz NY Strip Steak' },

        {
          ingredient_id: 2, 
          ingredient_name: '16oz pepper jack cheese'},

        { 
          ingredient_id: 3, 
          ingredient_name: '8oz pineapple juice'},
      ]);
};
