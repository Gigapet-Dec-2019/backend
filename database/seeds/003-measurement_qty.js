
exports.seed = function(knex) {
  return knex('measurement_qty').truncate()
    .then(function () {
      return knex('measurement_qty').insert([
        {qty_amount: 4},
        {qty_amount: 5},
        {qty_amount: 2},
      ]);
    });
};
