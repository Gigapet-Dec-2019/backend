const db = require('../database/dbConfig');

module.exports = {
	find,
	findBy,
	findById,
	add,
	update,
	remove,
	getUserRecipes
}

function find() {
	return db('recipes as r')
	.join('users as u', 'u.id', 'r.user_id')
	.select('u.id','r.title', 'r.meal_type','r.description')

	.join('ingredients as i', 'i.ingredient_id', 'r.user_id')
	.select('i.ingredient_qty', 'i.ingredient_name')

	.join('instructions as n', 'n.id', 'r.user_id')
	.select('n.step_1', 'n.step_2','n.step_3')
	
}

function findBy(filter){
	return db('recipes').where(filter);
};

function findById(id){
	return db('recipes as r')
	.join('users as u', 'u.id', 'r.user_id')
	.select('u.id','r.title', 'r.meal_type','r.description')

	.join('ingredients as i', 'i.ingredient_id', 'r.user_id')
	.select('i.ingredient_qty', 'i.ingredient_name')

	.join('instructions as n', 'n.id', 'r.user_id')
	.select('n.step_1', 'n.step_2','n.step_3')

	.where('r.user_id', id)
	.first()
}


function add(newRecipe) {
    return db('recipes')
    .insert(newRecipe)
    .then(ids => {
    return findById(ids[0]);
    });
}

function update(id, changes) {
	return db('users')
	.where('id', id)
	.update(changes);
}

function remove(id){
	return db('recipes')
	.where('id', id)
	.del();
}

function getUserRecipes(userId) {
	return db('recipes as r')
	.join('users as u', 'u.id', 'r.user_id')
	.select('u.id','r.title', 'r.meal_type','r.description')

	.join('ingredients as g', 'g.ingredient_id', 'r.user_id')
	.select('g.ingredient_qty', 'g.ingredient_name')

	.join('instructions as i', 'i.id', 'r.user_id')
	.select('i.step_1', 'i.step_2','i.step_3')
	.where('r.user_id', userId)
	
}