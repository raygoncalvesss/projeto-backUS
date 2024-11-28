import { Router } from "express";
import cadastroRoutes from "./cadastroRoutes.js"; // Certifique-se de que o caminho está correto

const rotas = Router();

// Rota principal para verificar o status do servidor
rotas.get("/", (req, res) => {
  res.status(200).send("Servidor rodando e pronto para uso!");
});

// Rotas relacionadas ao cadastro
rotas.use("/cadastro", cadastroRoutes);

// Middleware para tratar rotas não encontradas
rotas.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });
});

export default rotas;
