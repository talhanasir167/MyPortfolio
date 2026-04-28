import { Resend } from "resend";
import { z } from "zod";

const hireSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  projectDescription: z.string().min(10).max(5000),
  budget: z.string().max(200).optional().or(z.literal("")),
  timeline: z.string().max(200).optional().or(z.literal("")),
});

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const toEmail = process.env.CONTACT_TO_EMAIL ?? "talhanasir167@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    if (!resend) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service is not configured yet." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const parsed = hireSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: "Invalid form data.", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, projectDescription, budget, timeline } = parsed.data;

    const subject = `New hire request from ${name}`;
    const text = [
      "New hire/quote request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Budget: ${budget || "Not provided"}`,
      `Timeline: ${timeline || "Not provided"}`,
      "",
      "Project description:",
      projectDescription,
    ].join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Hire form submission failed", error);
    return Response.json(
      { error: "Failed to send request. Please try again." },
      { status: 500 },
    );
  }
}
