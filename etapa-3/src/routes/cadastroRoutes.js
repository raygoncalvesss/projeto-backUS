import { Router } from "express";

const cadastroRoutes = Router();

cadastroRoutes.post("/adicionar", (req, res) => {
    console.log(req.body);
    res.status(201).send("Adicionado com sucesso");
});

cadastroRoutes.get("/listar", (req, res) => {
    res.status(200).send("Listado com sucesso");
});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;