import express from "express";
import { config } from "dotenv";
import rotas from "./routes/indexRoutes.js";
import QueryString from "qs";

config();
const portaServidor = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(rotas);

app.listen(portaServidor, () => {
  console.log(`Servidor iniciado em http://localhost:${portaServidor} 🎉`);
});