import Link from "next/link";
import DataTable from "@/components/DataTable";
import type { Column } from "@/components/DataTable";
import { listAutomezzi } from "@/lib/automezzi.repo";
import type { Automezzo } from "@/lib/automezzi.repo";
import { AddIcon, LeftArrowIcon, ViewIcon, RemoveIcon } from "@/components/icons";
import DeleteActionForm from "@/components/DeleteActionForm";
import { deleteAutomezzoAction } from "./actions";

export default async function AutomezziListPage() {
  const automezzi: Automezzo[] = await listAutomezzi();

  const columns: Column<Automezzo>[] = [
    {
      header: "Codice",
      cell: (a) => (
        <Link className="text-primary hover:underline" href={`/automezzi/${a.codice}`}>
          {a.codice}
        </Link>
      )
    },
    { header: "Targa", cell: (a) => a.targa },
    { header: "Marca", cell: (a) => a.marca },
    { header: "Modello", cell: (a) => a.modello },
    {
      header: "Filiale",
      cell: (a) => (
        <Link className="text-primary hover:underline" href={`/filiali/${a.filialeCodice}`}>
          {a.filialeCodice}
        </Link>
      )
    },
    {
      header: "Azioni",
      cell: (a) => (
        <div className="flex justify-center gap-3">
          <Link href={`/automezzi/${a.codice}`} title="Visualizza dettagli">
            <ViewIcon className="w-8 h-8 text-primary" />
          </Link>
          <DeleteActionForm
            action={deleteAutomezzoAction}
            values={{ codice: a.codice }}
            confirmText="Sei sicuro di voler eliminare questo automezzo?"
            title="Elimina automezzo"
          >
            <RemoveIcon className="w-8 h-8 text-primary" />
          </DeleteActionForm>
        </div>
      )
    },
  ];

  return (
    <>
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
        <Link
          href="/automezzi/new"
          className="flex items-center justify-center gap-2 text-gray-50 bg-primary hover:saturate-65 rounded-lg px-4 py-2"
        >
          <AddIcon className="w-6 h-6" />
          Inserisci nuovo automezzo
        </Link>
      </div>
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-gray-50 bg-primary hover:saturate-65 rounded-lg px-4 py-2"
      >
        <LeftArrowIcon className="w-6 h-6" />
        Torna alla home
      </Link>
    </>
  );
}