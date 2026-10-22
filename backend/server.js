const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    status: 'ok',
    mensagem: 'Backend funcionando!'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});