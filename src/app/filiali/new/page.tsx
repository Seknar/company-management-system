import DataForm from "@/components/DataForm";
import type { FormField } from "@/components/DataForm";
import { createFilialeAction } from "../actions";

export default function NewAutomezzoPage() {
  const fields: FormField[] = [
    { name: "codice", label: "Codice", required: true, placeholder: "FIL001" },
    { name: "indirizzo", label: "Indirizzo", required: true, placeholder: "Via Roma 12" },
    { name: "citta", label: "Città", required: true, placeholder: "Milano" },
    { name: "cap", label: "CAP", required: true, placeholder: "20121" },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
        Inserisci nuova filiale
      </h1>
      <DataForm
        fields={fields}
        submitLabel="Crea"
        action={createFilialeAction}
      />
    </div>
  );
}