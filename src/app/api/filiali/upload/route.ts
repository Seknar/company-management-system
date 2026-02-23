import { NextResponse } from "next/server";
import { listFiliali } from "@/lib/filiali.repo";

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
      { error: "REMOTE_URL_FILIALI missing in env" },
      { status: 500 }
    );
  }

  const filiali = await listFiliali();

  const payload = {
    email,
    data: filiali,
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