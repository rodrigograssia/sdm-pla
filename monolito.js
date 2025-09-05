const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let usuarios = [];
let pedidos = [];

// Rotas para criação de usuários
app.post("/usuarios", (req,res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send({message: "Usuário criado com sucesso!"});
});

// Rota para criar um pedido e usuários
app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({message: "Pedido criado com sucesso!"});
});

// Rota para listar todos os usuários
app.get("/dados", (req, res) => {
    res.send({ usuarios });
})


// Iniciar o servidor na porta 3000
app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:3000");
});