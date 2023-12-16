import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY_RESEND);

export async function POST() {
  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "viktorhrimli101@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    return Response.json({ text: "OK" });
  } catch (error) {
    return Response.json({ error });
  }
}
