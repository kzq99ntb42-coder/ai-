export function sanitizeText(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

export function escapeHtml(value) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => htmlEntities[character]);
}

export function validateContactSubmission(rawBody = {}) {
  const name = sanitizeText(rawBody.name);
  const company = sanitizeText(rawBody.company);
  const email = sanitizeText(rawBody.email).toLowerCase();
  const message = sanitizeText(rawBody.message);
  const honeypot = sanitizeText(rawBody.website || rawBody.url || rawBody.honeypot);

  const errors = {};

  if (honeypot) {
    errors.honeypot = "送信内容を確認できませんでした。";
  }

  if (!name) {
    errors.name = "お名前を入力してください。";
  } else if (name.length < 2 || name.length > 100) {
    errors.name = "お名前は2文字以上100文字以内で入力してください。";
  }

  if (!company) {
    errors.company = "会社名を入力してください。";
  } else if (company.length < 2 || company.length > 120) {
    errors.company = "会社名は2文字以上120文字以内で入力してください。";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "メールアドレスを入力してください。";
  } else if (!emailPattern.test(email) || email.length > 254) {
    errors.email = "有効なメールアドレスを入力してください。";
  }

  if (!message) {
    errors.message = "お問い合わせ内容を入力してください。";
  } else if (message.length < 10 || message.length > 5000) {
    errors.message = "お問い合わせ内容は10文字以上5000文字以内で入力してください。";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    clean: {
      name,
      company,
      email,
      message,
    },
  };
}
