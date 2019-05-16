exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("person")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("person").insert([
        { name: "ten" },
        { name: "eleven" },
        { name: "twelve" }
      ]);
    });
};
