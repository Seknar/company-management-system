import DataForm from "@/components/DataForm";
import type { FormField } from "@/components/DataForm";
import { listFilialiOptions } from "@/lib/filiali.repo";
import type { FilialeOption } from "@/lib/filiali.repo";
import { createAutomezzoAction } from "./actions";

export default async function NewAutomezzoPage() {
  const filialiCodici: FilialeOption[] = await listFilialiOptions();

  const fields: FormField[] = [
    { name: "codice", label: "Codice", required: true, placeholder: "AUTO001" },
    { name: "targa", label: "Targa", required: true, placeholder: "AB123CD" },
    { name: "marca", label: "Marca", required: true, placeholder: "Fiat" },
    { name: "modello", label: "Modello", required: true, placeholder: "Ducato" },
    {
      name: "filialeCodice",
      label: "Filiale",
      type: "select",
      required: true,
      placeholder: "Seleziona una filiale",
      options: filialiCodici.map((f) => ({
        value: f.codice,
        label: f.codice,
      })),
    },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
        Inserisci nuovo automezzo
      </h1>
      <DataForm
        fields={fields}
        submitLabel="Crea"
        action={createAutomezzoAction}
      />
    </div>
  );
}