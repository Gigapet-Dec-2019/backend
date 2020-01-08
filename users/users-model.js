const db = require('../database/dbConfig');

module.exports = {
    find,
    findBy,
    findById, 
    add,
    update,
    remove,
}


function find(){
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter);
}


function findById (id) {
    return db('users')
    .where('id', id)
    .first()
};


function add(newUser) {
    return db('users')
    .insert(newUser)
    .then(ids => {
    return findById(ids[0]);
    })
}

function update(id, changes) {
    return db('users')
    .where('id', id)
    .update(changes);
}


function remove (id) {
    return db('users')
    .where('id', id)
    .del();
};