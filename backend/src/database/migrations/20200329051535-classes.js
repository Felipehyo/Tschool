exports.up = function(knex) {
  return knex.schema.createTable('classes', function (table) {
    table.increments('id').primary();
    table.string('classe').notNullable();

    table.integer('school_id').notNullable();
    table.foreign('school_id').references('id').inTable('schools');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('classes');
}; 