exports.up = function(knex) {
  return knex.schema.createTable('events', function (table) {
    table.increments('id').primary();//id e chave primaria
    
    table.string('name').notNullable();
    table.date('date').notNullable();//mudar
    table.string('address').notNullable();
    table.string('description').notNullable();
    table.string('observations');
    table.double('value');
    table.integer('max_installments');
    table.string('init_hour').notNullable();
    table.string('final_hour').notNullable();
    table.string('image');
    
    table.integer('school_id').notNullable();
    table.foreign('school_id').references('id').inTable('schools');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};