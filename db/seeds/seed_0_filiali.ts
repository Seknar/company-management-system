import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("filiali").del();

    // Inserts seed entries
    await knex("filiali").insert([
        { codice: "FIL001", indirizzo: "Via Roma 12", citta: "Milano", cap: "20121" },
        { codice: "FIL002", indirizzo: "Via Reggio 29", citta: "Parma", cap: "43124" },
        { codice: "FIL003", indirizzo: "Via Dante 51/A", citta: "Taranto", cap: "74121" },
        { codice: "FIL004", indirizzo: "Viale Europa 23", citta: "Bologna", cap: "40121" }
    ]);
}
