
exports.seed = function(knex) {
 
  return knex('instructions').truncate()
    .then(function () {
      return knex('instructions').insert([
        {id: 1, 
          instructions_id: 1, 
          step_1: '1. sear steak',
          step_2: '2.',
          step_3: '3.',
          step_4: '4.',
          step_5: '5.',
          step_6: '6.'
        },

        {id: 2, 
          instructions_id: 2, 
          step_1: '1. roast peppers',
          step_2: '',
          step_3: '',
          step_4: '',
          step_5: '',
          step_6: ''},

        {id: 3, 
          instructions_id: 3, 
          step_1: '1. Mix all ingredients',
          step_2: '',
          step_3: '',
          step_4: '',
          step_5: '',
          step_6: ''},
      ]);
    });
};
