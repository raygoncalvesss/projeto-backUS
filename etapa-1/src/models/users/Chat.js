import { Router } from "express";

const router = Router();

// Simulação de um banco de mensagens
const mensagens = [];

// Rota para enviar uma mensagem
router.post("/enviarMensagem", (req, res) => {
  const { apelido, mensagem } = req.body;

  // Validações
  if (!apelido || typeof apelido !== "string" || apelido.trim() === "") {
    return res.status(400).json({ erro: "Apelido inválido." });
  }
  if (!mensagem || typeof mensagem !== "string" || mensagem.trim() === "") {
    return res.status(400).json({ erro: "Mensagem inválida." });
  }

  // Formata o horário
  const agora = new Date();
  const horario = agora.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Cria e salva a mensagem
  const mensagemFormatada = `${horario} - ${apelido}: ${mensagem}`;
  mensagens.push(mensagemFormatada);

  return res.status(201).json({ mensagem: mensagemFormatada });
});

// Rota para listar todas as mensagens
router.get("/mensagens", (req, res) => {
  return res.status(200).json({ mensagens });
});

export default router;