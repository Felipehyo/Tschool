exports.up = function(knex) {
  return knex.schema.createTable('student_responsibles', function (table) {
    table.increments('id').primary();

    table.string('student_id').notNullable();
    table.integer('responsible_id').notNullable();
    
    table.foreign('student_id').references('id').inTable('students');
    table.foreign('responsible_id').references('id').inTable('responsibles');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('student_responsibles');
}; 