import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY_RESEND);

export async function POST(req) {
  const data = await req.json();

  const markDown = Object.keys(data)
    .map((item) => `<strong>${item}</strong><p>${data[item]}</p>`)
    .join("");

  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@actum.com.ua",
      subject: "Отправлен запрос на консультацию",
      html: markDown,
    });
    return Response.json({ text: "OK" });
  } catch (error) {
    return Response.json({ error });
  }
}
