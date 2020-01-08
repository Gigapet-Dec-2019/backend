
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
    .increments();
    table
    .string('full_name', 255)
    .notNullable()
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
    table
    .string('location', 255)
    table
    .string('business_phone', 255)
    .unique()
    table
    .string('business_email', 255)
    .unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
