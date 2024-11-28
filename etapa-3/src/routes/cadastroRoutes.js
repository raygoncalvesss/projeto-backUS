import { Router } from "express";

const cadastroRoutes = Router();
let cadastros = [];

cadastroRoutes.post("/adicionar", (req, res) => {
  const { grupo, nome, apelido, estaVivo, senha } = req.body;

  if (!grupo || !nome || !apelido || estaVivo === undefined || !senha) {
    return res.status(400).json({ message: "Todos os campos (grupo, nome, apelido, estaVivo e senha) são obrigatórios." });
  }

  const novoCadastro = {
    id: cadastros.length + 1,
    grupo,
    nome,
    apelido,
    estaVivo: estaVivo === "true",
    senha,
  };

  cadastros.push(novoCadastro);
  res.status(201).json({ message: "Adicionado com sucesso", cadastro: novoCadastro });
});

cadastroRoutes.get("/listar", (req, res) => {
  res.status(200).json({
    message: "Listado com sucesso",
    cadastros,
  });
});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;
