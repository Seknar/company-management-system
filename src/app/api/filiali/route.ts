import { NextResponse } from "next/server";
import { listFiliali } from "@/lib/filiali.repo";

export async function GET() {
  const filiali = await listFiliali();
  return NextResponse.json(filiali);
}