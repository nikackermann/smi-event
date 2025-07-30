import { Resend } from "resend";
import { EmailTemplate } from "@/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail({
  to,
  firstName,
}: {
  to: string;
  firstName: string;
}) {
  return await resend.emails.send({
    from: "WAFIOS | Training Course <noreply@notifications.wafios.us>",
    to: [to],
    subject: "Welcome to the Spring End Grinding Training Course",
    react: EmailTemplate({
      first_name: firstName,
      last_name: "", // We'll update EmailTemplate to make this optional if needed
    }),
  });
}
