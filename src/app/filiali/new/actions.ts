"use server";

import { createFiliale } from "@/lib/filiali.repo";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function requiredString(formData: FormData, key: string) {
  const v = formData.get(key);
  if (typeof v !== "string" || v.trim() === "") {
    throw new Error(`Missing field: ${key}`);
  }
  return v.trim();
}

export async function createFilialeAction(formData: FormData) {
  const codice = requiredString(formData, "codice");
  const indirizzo = requiredString(formData, "indirizzo");
  const citta = requiredString(formData, "citta");
  const cap = requiredString(formData, "cap");

  await createFiliale({ codice, indirizzo, citta, cap });

  revalidatePath("/filiali");
  redirect("/filali");
}