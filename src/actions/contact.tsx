"use server";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email/email-template";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

type ContactFormType = z.infer<typeof ContactSchema>;

export async function sendContactEmail(formData: ContactFormType) {
  const result = ContactSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  try {
    const { name, email, message } = result.data;

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["sachinsureka375@gmail.com"],
      subject: `New Message from ${name}`,
      replyTo: email,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return { success: false, error: "Failed to send email" };
  }
}
