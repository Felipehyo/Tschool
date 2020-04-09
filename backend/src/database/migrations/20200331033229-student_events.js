exports.up = function(knex) {
  return knex.schema.createTable('student_events', function (table) {
    table.increments('id').primary();//id e chave primaria
    table.integer('confirm').notNullable();
    table.integer('pay').notNullable();

    table.string('student_id').notNullable();
    table.integer('event_id').notNullable();
    
    table.foreign('student_id').references('id').inTable('students');
    table.foreign('event_id').references('id').inTable('events');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('student_events');
}; 