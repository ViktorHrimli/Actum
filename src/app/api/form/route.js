import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycbxKAn8CRbPEUWYsqLm9wg7EwMHGUJHfbhsrEnXAkWPDyJUlKaVXTyHrWk8OMob0tkmHQw/exec",
    { method: "POST", body }
  );

  return NextResponse.json(body);
}
