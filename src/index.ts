import express from "express";
import { configDotenv } from "dotenv";
import path from "node:path";

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

const DIST_DIR = __dirname;
const INDEX_HTML = path.join(DIST_DIR, "/index.html");

// Serve static assets from dist (copied from public via build)
app.use(express.static(DIST_DIR));

app.get("/", (_req, res) => {
  return res.send(INDEX_HTML);
});

app.listen(port, function () {
  console.log(`SERVER STARTED ON ${port}`);
});
