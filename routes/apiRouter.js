const express = require('express');
const apiRouter = express.Router();

const lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
};

apiRouter.get('/produtos', function (req, res) {
    res.json(lista_produtos.produtos)
    res.end()
});
apiRouter.get('/produtos/:id ? type=xpto', function (req, res) {
    console.log('Header: ' + req.get('Sec-Fetch-Site'));
    
    let id = Number.parseInt(req.params.id)
    let idx = lista_produtos.findIndex (elem => elem.id == id)
    if (idx > -1) {
        res.json(lista_produtos.produtos[idx]);        
    }
    else {
        res.status(404).json({ message: "Product not found!" });
    }
});

// Cria u manipulador da rota padrão 
apiRouter.post('/produtos', express.json(), function (req, res) {
    res.send(`Hello World: ${req.body.dados}`)
});

module.exports = apiRouter