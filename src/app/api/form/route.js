import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();

  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbwYxdg_i36f9pyESZqszVMUyi-BrsEyo0TAZGd3pnOFY2ycZ33rYlQt19QBHbN7u9hy/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const responseData = await res.json();

  return NextResponse.json(responseData);
}
// "https://script.google.com/macros/s/AKfycbxKAn8CRbPEUWYsqLm9wg7EwMHGUJHfbhsrEnXAkWPDyJUlKaVXTyHrWk8OMob0tkmHQw/exec",
