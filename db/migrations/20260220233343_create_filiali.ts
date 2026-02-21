import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("filiali", (table) => {
        table.string("codice").primary();
        table.string("indirizzo").notNullable();
        table.string("citta").notNullable();
        table.string("cap").notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("filiali");
}

