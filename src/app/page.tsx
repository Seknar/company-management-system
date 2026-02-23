import Link from "next/link";
import { FilialiIcon, AutomezziIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-text">
        Benvenuto. Seleziona una schermata.
      </h1>
      <div className="flex w-full items-center gap-6 text-center mt-12">
        <Link
          href="/filiali"
          className="flex flex-col w-1/2 h-96 items-center justify-center gap-8 bg-surface hover:bg-primary hover:saturate-65 rounded-lg p-4"
        >
          <FilialiIcon className="w-38 h-38 text-text" />
          <h2 className="text-2xl font-medium text-text">
            Filiali
          </h2>
        </Link>
        <Link
          href="/automezzi"
          className="flex flex-col w-1/2 h-96 items-center justify-center gap-8 bg-surface hover:bg-primary hover:saturate-65 rounded-lg p-4"
        >
          <AutomezziIcon className="w-38 h-38 text-text" />
          <h2 className="text-2xl font-medium text-text">
            Automezzi
          </h2>
        </Link>
      </div>
    </div>
  );
}
