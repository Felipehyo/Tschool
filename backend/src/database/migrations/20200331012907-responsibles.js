exports.up = function(knex) {
  return knex.schema.createTable('responsibles', function (table) {
    table.increments('id').primary();//id e chave primaria
    table.string('name').notNullable();
    table.string('cpf').notNullable();
    table.string('rg').notNullable();
    table.string('user').notNullable();
    table.string('password').notNullable();
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTable('responsibles');
}; 