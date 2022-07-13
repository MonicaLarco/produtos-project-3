// Importa o módulo do Express Framework
const express = require('express')
const morgan = require('morgan')
const apiRouter = require('./routes/apiRouter');
const clientRouter = require('./routes/clientRouter');
const port = process.env.PORT || 3000;

// Inicializa um objeto de aplicação Express
const app = express();

// realiza log da requisição
app.use (morgan ('common'))
app.use ('/api', apiRouter)
app.use('/site', clientRouter)


// Inicializa o servidor HTTP na porta 3000
app.listen(port, () => console.info(`Listening on ${ port }`));