const db = require('../database/dbConfig');


module.exports = {
    get,
    findById,
    add,
    update,
    remove,
    };

    function get() {
    return db('recipes');
    }

    function findById(id) {
    return db('recipes')
    .where('id', id)
        .first();
    }

    function add(post) {
    return db('recipes')
        .insert(post)
        .then(ids => {
        return findById(ids[0]);
        });
    }

    function update(id, changes) {
    return db('recipes')
    .where('id', id)
        .update(changes);
    }

    function remove(id) {
    return db('recipes')
        .where('id', id)
        .del();
    }
