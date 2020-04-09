// Update with your config settings.

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      database: 'TschoolDev',
      user:     'postgres',
      password: 'root'
    },
    migrations: {
      directory: './src/database/migrations' 
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgres',
    connection: {
      database: 'Tschool',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      database: 'Tschool',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
