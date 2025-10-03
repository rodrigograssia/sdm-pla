require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios')

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, required: true, uniruqe: true },
    status: { type: Date, default: Date.now }
});

const User = mongoose.model('User',userSchema);

app.post('/usuarios', async (req, res) => {
    try {
        const { name = '', email } = req.body;
        if (!email)
            return res.status(400).json({ error: 'User email is required' });

        const user = new User({ name, email });
        const saved = await user.save();

        try {
            await azios.post('http://localhost:4000/pedidos', { userId: saved._id, items: [], total: 0});
        } catch (err) {
            console.error('Erro ao criar pedido para o usuário: ', err)
        }

        return res.status(201).json(saved);
    } catch (err) {
        console.error(err)
        if (err.code === 11000) return res.status(400).json
        ({error: 'Email já cadastrado'});

    return res.status(500).json({error: 'Erro ao criar usuário'})
    }
});

app.listen(3000, () => {
    console.log('Order service running on http://localhost:3000');
});