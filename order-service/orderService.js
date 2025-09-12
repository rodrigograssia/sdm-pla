const express = require('express');
const app = express();

app.use(express.json());

const pedidos = [];

app.post('/pedidos', (req,res) => {
    const pedido = req.body;
    console.log(`Pedido recebido para o usuário ID: ${pedido.userId}`);
    res.send({ message: 'Pedido criado com sucesso!', pedido });
});

app.get('/pedidos', (req, res) => {
    res.send({ pedidos });
});

app.listen(4000, () =>
    console.log('Order Service rodando em: http://localhost:4000')
);