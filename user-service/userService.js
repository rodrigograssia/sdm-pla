const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/usuarios', async (req, res) => {
    const usuario = req.body;

    await axios.post('http://localhost:4000/pedidos', { userId: usuario.id });

    res.send({ message: 'Usuário criado com sucesso!', usuario });
});

app.get('/usuarios', (req, res) => {
    res.send({ message: 'Endpoint GET /usuarios funcionando!' });
});

app.listen(3000, () => {
    console.log('User Service rodando em http://localhost:3000')
});