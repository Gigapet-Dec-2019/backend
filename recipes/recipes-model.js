const db = require('../database/dbConfig');

module.exports = {
	find,
	findBy,
	findById,
	add,
	update,
	remove,
	findAllRecipes
}

function find() {
	return db('recipes')
}

function findBy(filter){
	return db('recipes').where(filter);
};

function findById(id){
	return db('recipes')
	.where('id', id)
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

function findAllRecipes(id) {
	return db('users')
	.join('recipes', 'recipes.id', 'user_id')
	.select('recipes.*')
	.where('recipes.id', id);
}
//'recipes.id', 'user_id')