exports.up = function(knex, Promise) {
  return knex.schema.createTable("person", tbl => {
    tbl.increments();

    tbl.string("name", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("person");
};
