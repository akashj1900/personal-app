import { getStore } from "@netlify/blobs";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS });
  }

  const store = getStore("lovvy");
  const url = new URL(req.url);
  const action = url.searchParams.get("action"); // "get" | "set"
  const key = url.searchParams.get("key");       // "journal" | "answers" | "moods" | "questions"

  if (!key) {
    return new Response(JSON.stringify({ error: "missing key" }), {
      status: 400, headers: { ...CORS, "Content-Type": "application/json" },
    });
  }

  // GET — read a key
  if (req.method === "GET" || action === "get") {
    try {
      const value = await store.get(key, { type: "json" });
      return new Response(JSON.stringify({ ok: true, data: value ?? null }), {
        headers: { ...CORS, "Content-Type": "application/json" },
      });
    } catch {
      return new Response(JSON.stringify({ ok: true, data: null }), {
        headers: { ...CORS, "Content-Type": "application/json" },
      });
    }
  }

  // POST — write a key
  if (req.method === "POST" || action === "set") {
    try {
      const body = await req.json();
      await store.setJSON(key, body);
      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...CORS, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ ok: false, error: err.message }), {
        status: 500, headers: { ...CORS, "Content-Type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify({ error: "method not allowed" }), {
    status: 405, headers: { ...CORS, "Content-Type": "application/json" },
  });
};

export const config = { path: "/api/data" };
