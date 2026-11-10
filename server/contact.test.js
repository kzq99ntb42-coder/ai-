import test from "node:test";
import assert from "node:assert/strict";

import { validateContactSubmission } from "./validation.js";

test("accepts a valid contact submission", () => {
  const result = validateContactSubmission({
    name: "Ari Khan",
    company: "Muslim Chat Bots",
    email: "ariankhan7282@gmail.com",
    message: "Hello, I would like to discuss an AI support assistant for my business.",
  });

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
});

test("rejects missing required fields", () => {
  const result = validateContactSubmission({
    name: "",
    company: "",
    email: "not-an-email",
    message: "Hi",
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.company);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test("rejects honeypot spam input", () => {
  const result = validateContactSubmission({
    name: "Ari",
    company: "Muslim Chat Bots",
    email: "ariankhan7282@gmail.com",
    message: "Hello, I'd like to enquire about your services.",
    website: "https://spam.example",
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.honeypot);
});
