import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT;

app.init();

app.get("/", (_req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log(`SERVER STARTED ON ${port}`);
});
