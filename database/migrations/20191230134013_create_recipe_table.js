
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('recipe_name', 255);
    table.string('description', 255);
})
    .createTable('measurement_qty', table => {
    table.increments();
    table.integer('qty_amount');
})
.createTable('measurement_units', table => {
    table.increments();
    table.string('measurement_description');
})
.createTable('ingredients', table => {
    table.increments();
    table.string('ingredient_name');
})
.createTable('recipe_ingredients', table => {
    table.increments();
    table
    .integer('chef_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE');
    table
    .integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('recipes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table
    .integer('measurement_qty_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('measurement_qty')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table
    .integer('measurement_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('measurement_units')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table
    .integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('measurement_units')
    .dropTableIfExists('measurement_qty')
    .dropTableIfExists('recipes');
};
