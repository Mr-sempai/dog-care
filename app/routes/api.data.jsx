import { json } from "@remix-run/node";
import fs from "node:fs";
import path from "node:path";

const DB_PATH = path.resolve(process.cwd(), "db.json");

export async function loader() {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return json(JSON.parse(raw));
}

export async function action({ request }) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }
  const data = await request.json();
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  return json({ ok: true });
}
