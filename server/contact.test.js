import test from "node:test";
import assert from "node:assert/strict";

import { escapeHtml, validateContactSubmission } from "./validation.js";

test("escapes untrusted HTML before it is included in email markup", () => {
  assert.equal(
    escapeHtml(`<img src="x" onerror='alert(1)'>&`),
    "&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;&amp;",
  );
});

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

test("accepts Japanese contact details", () => {
  const result = validateContactSubmission({
    name: "山田太郎",
    company: "日本合同会社",
    email: "yamada@example.jp",
    message: "人工知能アシスタントについて相談したいです。",
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
  assert.equal(result.errors.name, "お名前を入力してください。");
  assert.equal(result.errors.company, "会社名を入力してください。");
  assert.equal(result.errors.email, "有効なメールアドレスを入力してください。");
  assert.equal(result.errors.message, "お問い合わせ内容は10文字以上5000文字以内で入力してください。");
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
