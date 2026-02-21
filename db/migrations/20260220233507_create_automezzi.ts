import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("automezzi", (table) => {
        table.string("codice").primary();
        table.string("targa").notNullable().unique();
        table.string("marca").notNullable();
        table.string("modello").notNullable();

        table.string("filiale_codice").notNullable().index();
        table
          .foreign("filiale_codice")
          .references("codice")
          .inTable("filiali")
          .onDelete("RESTRICT"); // necessary to prevent accidental deletion of automezzi
      });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("automezzi");
}

