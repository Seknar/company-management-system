import { NextResponse } from "next/server";
import { listAutomezzi } from "@/lib/automezzi.repo";

export async function GET() {
  const automezzi = await listAutomezzi();
  return NextResponse.json(automezzi);
}