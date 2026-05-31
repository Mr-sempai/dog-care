import { json } from "@remix-run/node";
import fs from "node:fs";
import path from "node:path";

export async function action({ request }) {
  const formData = await request.json();
  const db = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), "db.json"), "utf-8"));
  const { tgBotToken, tgChatId } = db.socials || {};

  if (!tgBotToken || !tgChatId) {
    return json({ ok: false, error: "Telegram not configured" });
  }

  const lines = [
    `🐾 <b>Нова заявка — Dog Care</b>`,
    ``,
    `👤 <b>Ім'я:</b> ${formData.name}`,
    `📞 <b>Телефон:</b> ${formData.phone}`,
    `🐕 <b>Вихованець:</b> ${formData.pet || "—"}`,
    `📋 <b>Послуга:</b> ${formData.service}`,
    `💬 <b>Повідомлення:</b> ${formData.message || "—"}`,
  ];

  try {
    const res = await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: tgChatId, text: lines.join("\n"), parse_mode: "HTML" }),
    });
    const result = await res.json();
    return json({ ok: result.ok });
  } catch (e) {
    return json({ ok: false, error: e.message });
  }
}
