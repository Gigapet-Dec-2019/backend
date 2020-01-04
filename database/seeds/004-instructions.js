
exports.seed = function(knex) {
      return knex('instructions').insert([
        { 
          instructions_id: 1, 
          instructions: 'sear steak', 
        },

        {
          instructions_id: 2, 
          instructions: 'roast peppers',
          },

        {
          instructions_id: 3, 
          instructions: 'Mix all ingredients',
        },
      ]);
};
