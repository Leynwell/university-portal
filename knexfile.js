module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/services/university.db'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/services/migrations'
    },
    seeds: {
      directory: './src/services/seeds'
    }
  }
};
