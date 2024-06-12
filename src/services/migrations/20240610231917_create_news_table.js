exports.up = function(knex) {
    return knex.schema.createTable('news', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('summary').notNullable();
        table.string('image').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('news');
};
