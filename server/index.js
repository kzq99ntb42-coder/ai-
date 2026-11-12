import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { escapeHtml, validateContactSubmission } from "./validation.js";

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
    message: "お問い合わせが続いています。15分ほどお待ちのうえ、再度お試しください。",
  },
});

app.use("/api", apiLimiter);

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "お問い合わせ受付API" });
});

app.post("/api/contact", async (request, response) => {
  const body = request.body || {};

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return response.status(400).json({ message: "送信内容を確認できませんでした。" });
  }

  const validation = validateContactSubmission(body);

  if (!validation.valid) {
    return response.status(400).json({
      message: "入力内容をご確認のうえ、もう一度お試しください。",
      errors: validation.errors,
    });
  }

  const { name, company, email, message } = validation.clean;
  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const mailTo = process.env.MAIL_TO || "ariankhan7282@gmail.com";
  const mailFrom = process.env.MAIL_FROM || smtpUser || "noreply@localhost";

  if (!smtpUser || !smtpPass) {
    return response.status(503).json({
      message: "メール送信の設定が完了していません。時間をおいてから再度お試しください。",
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
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `ウェブサイトからのお問い合わせ：${name}様（${company}）`,
      text: [
        `お名前：${name}`,
        `会社名：${company}`,
        `メールアドレス：${email}`,
        "",
        "お問い合わせ内容：",
        message,
      ].join("\n"),
      html: `
        <h2>ウェブサイトからのお問い合わせ</h2>
        <p><strong>お名前：</strong>${safeName}</p>
        <p><strong>会社名：</strong>${safeCompany}</p>
        <p><strong>メールアドレス：</strong>${safeEmail}</p>
        <p><strong>お問い合わせ内容：</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return response.status(200).json({
      message: "お問い合わせを送信しました。ありがとうございます。",
    });
  } catch (error) {
    console.error("お問い合わせメールの送信に失敗しました。", error?.code ?? "UNKNOWN");
    return response.status(500).json({
      message: "現在、メッセージを送信できません。時間をおいてから再度お試しください。",
    });
  }
});

app.use((_request, response) => {
  response.status(404).json({ message: "ページが見つかりません。" });
});

app.use((error, _request, response, next) => {
  if (error?.type === "entity.parse.failed") {
    return response.status(400).json({ message: "送信内容を正しく読み取れませんでした。" });
  }

  if (error?.type === "entity.too.large") {
    return response.status(413).json({ message: "送信内容が大きすぎます。" });
  }

  console.error("API処理中に予期しないエラーが発生しました。", error?.code ?? "UNKNOWN");
  return response.status(500).json({
    message: "現在、処理を完了できません。時間をおいてから再度お試しください。",
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`お問い合わせ受付APIを起動しました：http://localhost:${PORT}`);
  });
}

export { app };
export default app;
