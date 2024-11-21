import { Router } from "express";

// Lista de importação das rotas do projeto
import usuariosRoutes from "./usuarios.routes.js";
import chatRoutes from "../models/users/Chat.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai!" });
});

// Lista de uso das rotas do projeto
routes.use("/usuarios", usuariosRoutes);
routes.use("/chat", chatRoutes);

export default routes;