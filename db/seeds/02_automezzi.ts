import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("automezzi").del();

    // Inserts seed entries
    await knex("automezzi").insert([
        { codice: "AUTO001", targa: "AB123CD", marca: "Fiat", modello: "Ducato", filiale_codice: "FIL001" },
        { codice: "AUTO002", targa: "EF456GH", marca: "Iveco", modello: "Daily", filiale_codice: "FIL001" },
        { codice: "AUTO003", targa: "ST987KL", marca: "MAN", modello: "TGL 12.250", filiale_codice: "FIL001" },
        { codice: "AUTO004", targa: "MN321OP", marca: "Mercedes-Benz", modello: "Sprinter", filiale_codice: "FIL002" },
        { codice: "AUTO005", targa: "QR654ST", marca: "Ford", modello: "Transit", filiale_codice: "FIL002" },
        { codice: "AUTO006", targa: "UV987WX", marca: "Renault", modello: "Master", filiale_codice: "FIL002" },
        { codice: "AUTO007", targa: "IJ789KL", marca: "Volvo", modello: "FL 250", filiale_codice: "FIL003" },
    ]);
}
