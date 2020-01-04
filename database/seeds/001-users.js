
exports.seed = function(knex) {
      return knex('users').insert([
      { id: 1, username: "user1", password: 'password1', email:
      "email1@test.com"},
      { id: 2,  username: "user2", password: 'password2', email: "email2@test.com"},
      { id: 3, username: "user3", password: 'password3', email: "email3@test.com"},
      ]);
};
