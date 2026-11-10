export function sanitizeText(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

export function validateContactSubmission(rawBody = {}) {
  const name = sanitizeText(rawBody.name);
  const company = sanitizeText(rawBody.company);
  const email = sanitizeText(rawBody.email).toLowerCase();
  const message = sanitizeText(rawBody.message);
  const honeypot = sanitizeText(rawBody.website || rawBody.url || rawBody.honeypot);

  const errors = {};

  if (honeypot) {
    errors.honeypot = "Spam detected.";
  }

  if (!name) {
    errors.name = "Your name is required.";
  } else if (name.length < 2 || name.length > 100) {
    errors.name = "Name must be between 2 and 100 characters.";
  }

  if (!company) {
    errors.company = "Company name is required.";
  } else if (company.length < 2 || company.length > 120) {
    errors.company = "Company name must be between 2 and 120 characters.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!emailPattern.test(email) || email.length > 254) {
    errors.email = "Please provide a valid email address.";
  }

  if (!message) {
    errors.message = "Your message is required.";
  } else if (message.length < 10 || message.length > 5000) {
    errors.message = "Message must be between 10 and 5000 characters.";
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
