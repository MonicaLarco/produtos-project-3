// Importa o módulo do Express Framework
require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const apiRouter = require('./routes/apiRouter');
const clientRouter = require('./routes/clientRouter');
const port = process.env.PORT || 3000;

// Inicializa um objeto de aplicação Express
const app = express();
app.use(express.json());

// realiza log da requisição
app.use (morgan ('common'))
app.use ('/api', apiRouter)
app.use('/site', clientRouter)

// app.get('*', (req, res) => {
//     console.log(new Date().toLocaleString(), req.method, req.path);
//     next();
// });

// Inicializa o servidor HTTP na porta 3000
app.listen(port, () => console.info(`Listening on ${ port }`));