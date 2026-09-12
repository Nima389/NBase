import express from "express";
import { configDotenv } from "dotenv";
import path from "node:path";

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from dist (copied from public via build)
app.use(express.static(__dirname));

app.get("/", (_req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function () {
  console.log(`SERVER STARTED ON ${port}`);
});
