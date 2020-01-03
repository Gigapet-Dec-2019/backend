
exports.seed = function(knex) {
      return knex('join_all').insert([
        { 
          users_id: 1,
          ingredients_id: 1,
          instructions_id: 1 },

          { 
            users_id: 2,
            ingredients_id: 2,
            instructions_id: 2 },

            { 
              users_id: 3,
              ingredients_id: 3,
              instructions_id: 3 },
      ]);
};
