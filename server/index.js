import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { validateContactSubmission } from "./validation.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3001);

app.disable("x-powered-by");
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: false,
  }),
);
app.use(express.json({ limit: "1mb" }));

const apiLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000),
  max: Number(process.env.RATE_LIMIT_MAX_REQUESTS || 5),
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  message: {
    message: "Too many contact attempts. Please wait 15 minutes before trying again.",
  },
});

app.use("/api", apiLimiter);

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "contact-api" });
});

app.post("/api/contact", async (request, response) => {
  const body = request.body || {};

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return response.status(400).json({ message: "Submission rejected." });
  }

  const validation = validateContactSubmission(body);

  if (!validation.valid) {
    return response.status(400).json({
      message: "Please review the form and try again.",
      errors: validation.errors,
    });
  }

  const { name, company, email, message } = validation.clean;
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO || "ariankhan7282@gmail.com";
  const mailFrom = process.env.MAIL_FROM || smtpUser || "noreply@localhost";

  if (!smtpUser || !smtpPass) {
    return response.status(503).json({
      message: "Email delivery is not configured yet. Add your SMTP credentials to the environment variables.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `New enquiry from ${name} (${company})`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return response.status(200).json({
      message: "Thank you. Your enquiry has been sent.",
    });
  } catch (error) {
    console.error("Email delivery failed:", error);
    return response.status(500).json({
      message: "We could not send your message right now. Please try again later.",
    });
  }
});

app.use((_request, response) => {
  response.status(404).json({ message: "Not found." });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Contact API listening on http://localhost:${PORT}`);
  });
}

export { app };
export default app;
