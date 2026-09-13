import express from "express";
import { configDotenv } from "dotenv";
import path from "node:path";

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

const DIST_DIR = __dirname;
const INDEX_HTML = path.join(DIST_DIR, "/index.html");

app.use(express.static(DIST_DIR));

app.get("/", (_req, res) => {
  return res.sendFile(INDEX_HTML);
});

// SPA fallback — serve the app shell for client-side routes (e.g. /fa)
// so deep links and page refreshes work for every route.
app.use((_req, res) => {
  return res.sendFile(INDEX_HTML);
});

app.listen(port, function () {
  console.log(`SERVER STARTED ON ${port}`);
});
