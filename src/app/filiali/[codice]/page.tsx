import Link from "next/link";
import DataView from "@/components/DataView";
import type { ViewField } from "@/components/DataView";
import { findFiliale } from "@/lib/filiali.repo";
import type { Filiale } from "@/lib/filiali.repo";
import { notFound } from "next/navigation";
import { LeftArrowIcon } from "@/components/icons";

export default async function ShowFilialePage({
  params,
}: {
  params: Promise<{ codice: string }>;
}) {
  const { codice } = await params;

  const filiale: Filiale | undefined = await findFiliale(codice);
  if (!filiale) notFound();

  const fields: ViewField<Filiale>[] = [
    { label: "Codice", value: (f) => f.codice },
    { label: "Indirizzo", value: (f) => f.indirizzo },
    { label: "Città", value: (f) => f.citta },
    { label: "CAP", value: (f) => f.cap },
  ];

  return (
    <>
      <div className="flex flex-col w-full gap-6">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
          Filiale {codice}
        </h1>
        <DataView
          data={filiale}
          fields={fields}
        />
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