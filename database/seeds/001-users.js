
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "user1", password: 'password1', email: "email1@test.com"},
        {username: "user2", password: 'password2', email: "email2@test.com"},
        {username: "user3", password: 'password3', email: "email3@test.com"},
      ]);
    });
};
