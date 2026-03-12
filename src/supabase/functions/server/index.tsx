import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { Resend } from "npm:resend";
import * as kv from "./kv_store.tsx";
const app = new Hono();
const resendApiKey = Deno.env.get("RESEND_API_KEY");
const contactFromEmail = Deno.env.get("CONTACT_FROM_EMAIL");
const contactToEmail = Deno.env.get("CONTACT_TO_EMAIL");
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-018b3a43/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/make-server-018b3a43/contact", async (c) => {
  try {
    const body = await c.req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return c.json({ error: "Invalid request payload" }, 400);
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return c.json({ error: "Missing required contact fields" }, 400);
    }

    if (!EMAIL_REGEX.test(email) || email.includes("..")) {
      return c.json({ error: "Invalid email address" }, 400);
    }

    const submission = {
      name,
      email,
      phone,
      subject,
      message,
      submittedAt: new Date().toISOString(),
    };

    await kv.set(`contact_submission:${crypto.randomUUID()}`, submission);

    if (resend && contactFromEmail && contactToEmail) {
      await resend.emails.send({
        from: contactFromEmail,
        to: [contactToEmail],
        replyTo: email,
        subject: `Contact form: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      });
    }

    return c.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return c.json({ error: "Unable to process contact form submission" }, 500);
  }
});

Deno.serve(app.fetch);
