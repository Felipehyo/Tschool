exports.up = function(knex) {
  return knex.schema.createTable('students', function (table) {
    table.string('id').primary();//id e chave primaria
    table.string('name').notNullable();
    table.integer('idade').notNullable();
    table.string('cpf').notNullable();
    table.string('rg').notNullable();
    
    table.integer('class_id').notNullable();
    table.foreign('class_id').references('id').inTable('classes');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};