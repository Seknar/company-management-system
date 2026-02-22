import Link from "next/link";
import DataTable from "@/components/DataTable";
import { listAutomezzi } from "@/lib/automezzi.repo";
import { ViewIcon, RemoveIcon } from "@/components/icons";

export default async function AutomezziListPage() {
  const automezzi = await listAutomezzi();

  const columns = [
    {
      header: "Codice",
      cell: (f) => (
        <Link className="text-accent hover:underline" href={`/automezzi/${f.codice}`}>
          {f.codice}
        </Link>
      )
    },
    { header: "Targa", cell: (f) => f.targa },
    { header: "Marca", cell: (f) => f.marca },
    { header: "Modello", cell: (f) => f.modello },
    {
      header: "Filiale",
      cell: (f) => (
        <Link className="text-primary hover:underline" href={`/filiali/${f.filialeCodice}`}>
          {f.filialeCodice}
        </Link>
      )
    },
    {
      header: "Azioni",
      cell: (f) => (
        <div className="flex justify-center gap-3">
          <Link href={`/automezzi/${f.codice}`} title="Visualizza dettagli">
            <ViewIcon className="w-8 h-8 text-accent" />
          </Link>
          <Link href={`/automezzi/${f.codice}`} title="Elimina automezzo">
            <RemoveIcon className="w-8 h-8 text-accent" />
          </Link>
        </div>
      )
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
          Lista automezzi
      </h1>
      <DataTable
          columns={columns}
          data={automezzi}
          rowKey={(f) => f.codice}
          emptyText="Nessun automezzo trovato."
      />
    </div>
  );
}