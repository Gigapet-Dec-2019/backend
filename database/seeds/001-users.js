
exports.seed = function(knex) {
      return knex('users').insert([
      { username: "user1", password: 'password1', email:
      "email1@test.com"},
      { username: "user2", password: 'password2', email: "email2@test.com"},
      { username: "user3", password: 'password3', email: "email3@test.com"},
      ]);
};
