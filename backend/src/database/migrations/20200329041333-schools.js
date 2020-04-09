exports.up = function(knex) {
  return knex.schema.createTable('schools', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('number_students').notNullable();
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('schools');
};
