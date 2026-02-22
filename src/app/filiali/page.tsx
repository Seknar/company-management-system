import Link from "next/link";
import DataTable from "@/components/DataTable";
import { listFiliali } from "@/lib/filiali.repo";
import { ViewIcon, RemoveIcon } from "@/components/icons";

export default async function FilialiListPage() {
  const filiali = await listFiliali();

  const columns = [
    {
      header: "Codice",
      cell: (f) => (
        <Link className="text-accent hover:underline" href={`/filiali/${f.codice}`}>
          {f.codice}
        </Link>
      ),
    },
    { header: "Indirizzo", cell: (f) => f.indirizzo },
    { header: "Città", cell: (f) => f.citta },
    { header: "CAP", cell: (f) => f.cap },
    { header: "# Automezzi", cell: (f) => f.automezziCount },
    {
      header: "Azioni",
      cell: (f) => (
        <div className="flex justify-center gap-3">
          <Link href={`/filiali/${f.codice}`} title="Visualizza dettagli">
            <ViewIcon className="w-8 h-8 text-accent" />
          </Link>
          <Link href={`/filiali/${f.codice}`} title="Elimina filiale">
            <RemoveIcon className="w-8 h-8 text-accent" />
          </Link>
        </div>
      )
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
          Lista filiali
      </h1>
      <DataTable
          columns={columns}
          data={filiali}
          rowKey={(f) => f.codice}
          emptyText="Nessuna filiale trovata."
      />
    </div>
  );
}