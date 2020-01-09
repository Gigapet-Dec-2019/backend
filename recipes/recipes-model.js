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
	.select('i.ingredient_name')

	.join('instructions as n', 'n.instructions_id', 'r.user_id')
	.select('n.instructions',)
	
}

function findBy(filter){
	return db('recipes').where(filter);
};

function findById(id){
	return db('recipes as r')
	.join('users as u', 'u.id', 'r.user_id')
	.select('u.id','r.title', 'r.meal_type','r.description')

	.join('ingredients as i', 'i.ingredient_id', 'r.user_id')
	.select('i.ingredient_name')

	.join('instructions as n', 'n.instructions_id', 'r.user_id')
	.select('n.instructions',)

	.where('r.id', id)
}


function add(newRecipe) {
	return db('recipes')
    .insert(newRecipe)
	.then(ids => {
		let id =[];
		for (i = 0; i < ids.length; i++) {
			id[i] = ids;
			return findById(id);
		}
        // const [id] = ids;
        // return findById(id);
    });
}

function update(id, changes) {
	return db('recipes')
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

	.join('ingredients as i', 'i.ingredient_id', 'r.user_id')
	.select('i.ingredient_name')

	.join('instructions as n', 'n.instructions_id', 'r.user_id')
	.select('n.instructions',)
	.where('r.user_id', userId)
	
}