const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./src/services/university.db"
    },
    useNullAsDefault: true
});

module.exports = knex;
