import express from "express";
import { config } from "dotenv";
import routes from "./routes/index.routes.js";

// Carregar variáveis de ambiente do arquivo .env
config();

// Definir a porta do servidor, ou usar a variável de ambiente PORT se estiver definida
const serverPort = process.env.PORT || 3000;

// Criar a aplicação Express
const app = express();

// Middleware para permitir que o Express trabalhe com JSON
app.use(express.json());

// Usar as rotas definidas no arquivo index.routes.js
app.use(routes);

// Iniciar o servidor
app.listen(serverPort, () => {
  console.log(`⚡ Server started on http://localhost:${serverPort}`);
});
