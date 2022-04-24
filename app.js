const express = require('express');
const checkListRouter = require('./src/routes/checklist');
const app = express();

//requisição que verifica se o dado foi requisitado em json, se sim, insere no body
app.use(express.json());

app.use('/checklists', checkListRouter);

//ouvir a porta 3000
app.listen(3000, () => {
  console.log('Servidor foi iniciado!')
})