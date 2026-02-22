import db from "./db";

export type Automezzo = {
  codice: string;
  targa: string;
  marca: string;
  modello: string;
  filialeCodice: string;
};

export async function listAutomezzi(): Promise<Automezzo[]> {
  return db('automezzi')
    .select(
      'codice',
      'targa',
      'marca',
      'modello',
      'filiale_codice as filialeCodice'
    );
}

export async function singleAutomezzo(
  codice: string
): Promise<Automezzo | undefined> {
  return db('automezzi')
    .select(
      'codice',
      'targa',
      'marca',
      'modello',
      'filiale_codice as filialeCodice'
    )
    .where({codice})
    .first();
}

export async function createAutomezzo(data: Automezzo): Promise<void> {
  await db('automezzi').insert({
    codice: data.codice,
    targa: data.targa,
    marca: data.marca,
    modello: data.modello,
    filiale_codice: data.filialeCodice,
  });
}