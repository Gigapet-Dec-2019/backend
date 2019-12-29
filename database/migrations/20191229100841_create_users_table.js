
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
    .increments();
    table
    .string('username', 255)
    .notNullable()
    .unique();
    table
    .string('password', 255)
    .notNullable()
    table
    .string('email', 255)
    .notNullable()
    .unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
