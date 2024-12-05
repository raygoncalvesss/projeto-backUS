import { Router } from "express";

const cadastroRoutes = Router();
let cadastros = [];

// Adicionar cadastro
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
  res.status(201).json({ message: "Cadastro adicionado com sucesso.", cadastro: novoCadastro });
});

// Listar cadastros
cadastroRoutes.get("/listar", (req, res) => {
  res.status(200).json({
    message: "Listado com sucesso",
    cadastros,
  });
});

// Atualizar cadastro
cadastroRoutes.put("/atualizar/:nome", (req, res) => {
  const { nome } = req.params;
  const { grupo, novoNome, apelido, estaVivo, senha } = req.body;

  const cadastroIndex = cadastros.findIndex(cadastro => cadastro.nome === nome);

  if (cadastroIndex === -1) {
    return res.status(404).json({ message: "Cadastro não encontrado." });
  }

  if (!grupo || !novoNome || !apelido || estaVivo === undefined || !senha) {
    return res.status(400).json({ message: "Todos os campos (grupo, novoNome, apelido, estaVivo e senha) são obrigatórios." });
  }

  cadastros[cadastroIndex] = {
    id: cadastros[cadastroIndex].id,
    grupo,
    nome: novoNome,
    apelido,
    estaVivo: estaVivo === "true",
    senha,
  };

  res.status(200).json({ message: "Cadastro atualizado com sucesso.", cadastro: cadastros[cadastroIndex] });
});

// Remover cadastro
cadastroRoutes.delete("/remover/:id", (req, res) => {
  const { id } = req.params;

  const cadastroIndex = cadastros.findIndex(cadastro => cadastro.id === parseInt(id));

  if (cadastroIndex === -1) {
    return res.status(404).json({ message: "Cadastro não encontrado." });
  }

  cadastros.splice(cadastroIndex, 1);

  res.status(200).json({ message: "Cadastro removido com sucesso." });
});

export default cadastroRoutes;