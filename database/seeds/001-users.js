
exports.seed = function(knex) {
      return knex('users').insert([
      { id: 1, username: "user1", password: 'password1', email:
      "email1@test.com", location: 'San Diego, CA', business_phone: '(310) 531-6578', business_email: 'chef1@gmail.com'},

      { id: 2,  username: "user2", password: 'password2', email: "email2@test.com",location: 'San Francisco, CA', business_phone: '(310) 569-2043', business_email: 'chef2@gmail.com'},

      { id: 3, username: "user3", password: 'password3', email: "email3@test.com",location: 'Austin, TX', business_phone: '(956) 778-3454', business_email: 'chef3@gmail.com'},
      ]);
};
