"use server";

import { createAutomezzo } from "@/lib/automezzi.repo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function requiredString(formData: FormData, key: string) {
  const v = formData.get(key);
  if (typeof v !== "string" || v.trim() === "") {
    throw new Error(`Missing field: ${key}`);
  }
  return v.trim();
}

export async function createAutomezzoAction(formData: FormData) {
  const codice = requiredString(formData, "codice");
  const targa = requiredString(formData, "targa");
  const marca = requiredString(formData, "marca");
  const modello = requiredString(formData, "modello");
  const filialeCodice = requiredString(formData, "filialeCodice");

  await createAutomezzo({ codice, targa, marca, modello, filialeCodice });

  revalidatePath("/automezzi");
  redirect("/automezzi");
}