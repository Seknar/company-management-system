import Link from "next/link";
import DataTable from "@/components/DataTable";
import type { Column } from "@/components/DataTable";
import { listFiliali } from "@/lib/filiali.repo";
import type { Filiale } from "@/lib/filiali.repo";
import { AddIcon, LeftArrowIcon, ViewIcon, RemoveIcon } from "@/components/icons";
import DeleteActionForm from "@/components/DeleteActionForm";
import { deleteFilialeAction } from "./actions";

export default async function FilialiListPage() {
  const filiali: Filiale[] = await listFiliali();

  const columns: Column<Filiale>[] = [
    {
      header: "Codice",
      cell: (f) => (
        <Link className="text-primary hover:underline" href={`/filiali/${f.codice}`}>
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
            <ViewIcon className="w-8 h-8 text-primary" />
          </Link>
          <DeleteActionForm
            action={deleteFilialeAction}
            values={{ codice: f.codice }}
            confirmText="Sei sicuro di voler eliminare questa filiale?"
            title="Elimina filiale"
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
          Lista filiali
        </h1>
        <DataTable
          columns={columns}
          data={filiali}
          rowKey={(f) => f.codice}
          emptyText="Nessuna filiale trovata."
        />
        <Link
          href="/filiali/new"
          className="flex items-center justify-center gap-2 text-gray-50 bg-primary hover:saturate-65 rounded-lg px-4 py-2"
        >
          <AddIcon className="w-6 h-6" />
          Inserisci nuova filiale
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