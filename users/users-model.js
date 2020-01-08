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
    .then(id => {
        return db("users")
            .where("id", id)
            .select(
                "id",
                "full_name",
                "username",
                "email",
                "location",
                "business_phone",
                "business_email"
            )
            .first()
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