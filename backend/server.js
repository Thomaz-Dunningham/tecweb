//Iasmim Barbosa - 2212130100
//Thomaz Oliveira Dunningham - 2212130027
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.post('/api/form', (req, res) => {
    const formData = req.body;
    console.log('Dados recebidos no servidor:', formData);

    res.json({ message: 'Formulário recebido com sucesso no servidor!' });
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});

