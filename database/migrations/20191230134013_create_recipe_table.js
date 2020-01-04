
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('title', 255);
    table.string('meal_type', 255);
    table.string('description', 255);
    table.string('ingredient_name', 255);
    table.string('instructions', 255);
    table.integer('user_id');
    
})
.createTable('ingredients', table => {
    table.increments('ingredient_id');
    table.string('ingredient_name');
})
.createTable('instructions', table => {
    table.increments('instructions_id');
    table.string('instructions');
})
.createTable('join_all', table => {
    table.primary(["users_id", "ingredients_id","instructions_id" ])
    table
    .integer('users_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE'); 
    table
    .integer('ingredients_id')
    .unsigned()
    .notNullable()
    .references('ingredient_id')
    .inTable('ingredients')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');  
    table
    .integer('instructions_id')
    .unsigned()
    .notNullable()
    .references('instructions_id')
    .inTable('instructions')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');  
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('join_all')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
