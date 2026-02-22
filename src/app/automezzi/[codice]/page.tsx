import Link from "next/link";
import DataView from "@/components/DataView";
import { singleAutomezzo } from "@/lib/automezzi.repo";
import { notFound } from "next/navigation";

export default async function ShowAutomezzoPage({
  params,
}: {
  params: Promise<{ codice: string }>;
}) {
  const { codice } = await params;

  const automezzo = await singleAutomezzo(codice);
  if (!automezzo) notFound();

  const fields = [
    { label: "Codice", value: (a) => a.codice },
    { label: "Targa", value: (a) => a.targa },
    { label: "Marca", value: (a) => a.marca },
    { label: "Modello", value: (a) => a.modello },
    {
      label: "Filiale",
      value: (a) => (
        <Link
          href={`/filiali/${a.filialeCodice}`}
          className="text-primary hover:underline"
        >
          {a.filialeCodice}
        </Link>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
        Automezzo {codice}
      </h1>
      <DataView
        data={automezzo}
        fields={fields}
      />
    </div>
  );
}