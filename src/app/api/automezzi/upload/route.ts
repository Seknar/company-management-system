import { NextResponse } from "next/server";
import { listAutomezzi } from "@/lib/automezzi.repo";

export async function POST() {
  const email = process.env.UPLOAD_EMAIL;
  const url = process.env.REMOTE_URL_FILIALI;

  if (!email) {
    return NextResponse.json(
      { error: "UPLOAD_EMAIL missing in env" },
      { status: 500 }
    );
  }

  if (!url) {
    return NextResponse.json(
      { error: "REMOTE_URL_AUTOMEZZI missing in env" },
      { status: 500 }
    );
  }

  const automezzi = await listAutomezzi();

  const payload = {
    email,
    data: automezzi,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();

  try {
    const json = JSON.parse(text);
    return NextResponse.json(json, { status: res.status });
  } catch {
    return new NextResponse(text, { status: res.status });
  }
}