import express from "express";
import { config } from "dotenv";
import home from "./routes/home.js";
import gettrain from "./routes/getTrains.js";

config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/", home);
app.use("/trains", gettrain);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
