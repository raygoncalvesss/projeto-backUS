import { Router } from "express";

const usuariosRoutes = Router();

// Exemplo de rota
usuariosRoutes.get("/", (req, res) => {
  res.status(200).json({ message: "Rota de usuários funcionando!" });
});

export default usuariosRoutes;
