import express from "express";
import { configDotenv } from "dotenv";
import path from "node:path";

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

const DIST_DIR = __dirname;
const INDEX_HTML = path.join(DIST_DIR, "index.html");

// Serve static assets from dist (copied from public via build)
app.use(express.static(DIST_DIR));

// SPA fallback: any unmatched GET returns index.html
app.use((req, res, next) => {
  if (req.method !== "GET") return next();
  res.status(200).sendFile(INDEX_HTML);
});

app.listen(port, function () {
  console.log(`SERVER STARTED ON ${port}`);
});
