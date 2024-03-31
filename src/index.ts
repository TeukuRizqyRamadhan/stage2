import express from "express";
import * as dotenv from "dotenv";
import router from "./routers/router";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/staging/", router);

app.listen(process.env.PORT, () => {
  console.log(`sukses berjalan di port: ${process.env.PORT}`);
});
