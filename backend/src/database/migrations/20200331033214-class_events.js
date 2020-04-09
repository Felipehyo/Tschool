exports.up = function(knex) {
  return knex.schema.createTable('class_events', function (table) {
    table.increments('id').primary();//id e chave primaria
    table.integer('class_id').notNullable();
    table.integer('event_id').notNullable();
    
    table.foreign('class_id').references('id').inTable('classes');
    table.foreign('event_id').references('id').inTable('events');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('class_events');
}; 