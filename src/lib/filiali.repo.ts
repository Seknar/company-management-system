import db from "./db";

export type Filiale = {
  codice: string;
  indirizzo: string;
  citta: string;
  cap: string;
  automezziCount?: number;
};

export type FilialeOption = {
  codice: string;
};

type FilialeRow = Filiale & { automezziCount: string };

export async function listFiliali(): Promise<Filiale[]> {
  const rows = (await db('filiali')
    .select('filiali.*')
    .leftJoin('automezzi', 'filiali.codice', 'automezzi.filiale_codice')
    .count('automezzi.codice as automezziCount')
    .groupBy('filiali.codice')) as unknown as FilialeRow[];

  return rows.map(r => ({
    ...r,
    automezziCount: Number(r.automezziCount),
  }));
}

export async function findFiliale(codice: string): Promise<Filiale | undefined> {
  return db('filiali').select('*').where({codice}).first();
}

export async function listFilialiOptions(): Promise<FilialeOption[]> {
  return db('filiali').select('codice');
}

export async function createFiliale(data: Filiale): Promise<void> {
  await db('filiali').insert({
    codice: data.codice,
    indirizzo: data.indirizzo,
    citta: data.citta,
    cap: data.cap,
  });
}

export async function deleteFiliale(codice: string): Promise<void> {
  await db('filiali').where({codice}).del();
}