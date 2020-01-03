
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('title', 255);
    table.string('meal_type', 255);
    table.string('description', 255);
    table.string('ingredient_qty', 255);
    table.string('ingredient_name', 255);
    table.string('step_1', 255);
    table.string('step_2', 255);
    table.string('step_3', 255);
    table.integer('user_id');
    
})
.createTable('ingredients', table => {
    table.increments();
    table.integer('ingredient_id');
    table.string('ingredient_qty');
    table.string('ingredient_name');
})
.createTable('instructions', table => {
    table.increments();
    table.integer('instructions_id');
    table.string('step_1');
    table.string('step_2');
    table.string('step_3');
    table.string('step_4');
    table.string('step_5');
    table.string('step_6');
})
.createTable('join_all', table => {
    table.increments();
    table
    .integer('users_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE');
    table
    .integer('ingredients_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');  
    table
    .integer('instructions_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('instructions')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');  
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('join_all')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
