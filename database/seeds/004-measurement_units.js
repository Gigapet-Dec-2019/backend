
exports.seed = function(knex) {
  return knex('measurement_units').truncate()
    .then(function () {
      return knex('measurement_units').insert([
        {measurement_description: 'oz'},
        {measurement_description: 'lb'},
        {measurement_description: 'oz'},
      ]);
    });
};
