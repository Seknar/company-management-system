import db from "./db";

export type Filiale = {
  codice: string;
  indirizzo: string;
  citta: string;
  cap: string;
  automezziCount?: number;
};

export async function listFiliali(): Promise<Filiale[]> {
  const rows = await db('filiali')
    .select('filiali.*')
    .leftJoin('automezzi', 'filiali.codice', 'automezzi.filiale_codice')
    .count('automezzi.codice as automezziCount')
    .groupBy('filiali.codice');

  return rows.map(r => ({
    ...r,
    automezziCount: Number(r.automezziCount),
  }));
}

export async function singleFiliale(
  codice: string
): Promise<Filiale | undefined> {
  return db('filiali')
    .select('*')
    .where({codice})
    .first();
}