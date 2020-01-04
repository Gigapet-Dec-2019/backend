const db = require('../database/dbConfig');


module.exports = {
    get
    };

    function get() {
        return db('recipes as r')
        .join('users as u', 'u.id', 'r.user_id')
        .select('u.id','r.title', 'r.meal_type','r.description')
    
        .join('ingredients as i', 'i.ingredient_id', 'r.user_id')
        .select('i.ingredient_name')
    
        .join('instructions as n', 'n.instructions_id', 'r.user_id')
        .select('n.instructions',)
    }
