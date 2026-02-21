import {FilialiIcon, AutomezziIcon, ListIcon, AddIcon, RemoveIcon} from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
        Benvenuto. Seleziona un&#39;operazione:
      </h1>
      <div className="flex w-full items-center gap-6 text-center mt-12">
        <div className="flex flex-col w-1/2 h-96 items-center justify-around bg-surface rounded-lg p-4">
          <h2 className="text-2xl font-medium text-text">
            Filiali
          </h2>
          <FilialiIcon className="w-24 h-24 text-text" />
          <div className="flex justify-around w-full text-primary">
            <div className="flex flex-col items-center">
              <ListIcon className="w-8 h-8 text-primary" />
              Visualizza sedi
            </div>
            <div className="flex flex-col items-center">
              <AddIcon className="w-8 h-8 text-primary" />
              Aggiungi sede
            </div>
            <div className="flex flex-col items-center">
              <RemoveIcon className="w-8 h-8 text-primary" />
              Rimuovi sede
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-96 items-center justify-around bg-surface rounded-lg p-4">
          <h2 className="text-2xl font-medium text-text">
            Automezzi
          </h2>
          <AutomezziIcon className="w-24 h-24 text-text" />
          <div className="flex justify-around w-full text-primary">
            <div className="flex flex-col items-center">
              <ListIcon className="w-8 h-8 text-primary" />
              Visualizza sedi
            </div>
            <div className="flex flex-col items-center">
              <AddIcon className="w-8 h-8 text-primary" />
              Aggiungi sede
            </div>
            <div className="flex flex-col items-center">
              <RemoveIcon className="w-8 h-8 text-primary" />
              Rimuovi sede
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
