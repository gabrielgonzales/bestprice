//Importando as Bibliotecas e Módulos
const http = require('http');
const express = require('express');
const path = require('path');
let app = express();

//Importando API para a aplicação
const compare = require('./server/compare.js');
const regression = require('./server/regression.js');

//Setando o midddleware antes, assim qualquer requisão ao servidor
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//Configuração dos routing
app.get("/", function (request, response) {//Se acessar o Root entao retorna o index.html
    response.redirect('./public/index.html');
});

app.get("/product", function (request, response) {//Usa a API para buscar todos os produtos disponiveis no banco de dados
    response.send({
        "resultado": {
            "arroz": {
                "id": "123456",
                "price": "2.45"
            },
            "feijao": {
                "id": "789",
                "price": "99.89"
            }
        }
    })
});

app.get("/product/predict/:id", function (request, response) {//Usa a API da regressão de um produto com um ID específico
    var id = parseInt(request.params.id); //Peagnod informação do parametro da url

    if (isNaN(id)) { //Verfcando erro de formatação
        response.status(400);
        response.json({ error: "Bad request." });
        return;
    }

    //Busca no Banco de Dados o ID e retorna um Array do preço
    price = [1, 2, 3];

    try {
        let api = new regression(price);
        api.run().then(function (res) {
            response.json({ result: res });
        }).catch(function (err) {
            response.status(400);
            response.json({ error: "Bad request." });
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/product/:id", function (request, response) {//Usa a API da compare de um produto com um ID específico
    var id = parseInt(request.params.id);
    if (isNaN(id)) {
        response.status(400);
        response.json({ error: "Bad request." });
        return;
    }
    v = [1, 2, 3];
    try {
        let api = new compare(v);
        api.run().then(function (res) {
            response.json({ result: res });
        }).catch(function (err) {
            console.log(err);
            response.status(400);
            response.json({ error: "Bad request." });
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/lista/:ids", function (request, response) { //Usa a API da compare de uma lista de produto com IDs específicos
    let ids = []
    regex = /[0-9]+/g;
    while ((m = regex.exec(request.params.ids)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            ids.push(match);
        });
    }
    if (ids == null) {
        response.status(400);
        response.json({ error: "Bad request." });
        return
    }
    //Busca no Banco de Dados o ID e retorna um Array do preço
    v = [1, 2, 3];
    v2 = [4, 5, 6];
    try {
        let api = new compare(v, v2);
        api.run().then(function (res) {
            response.json({ result: res });
        }).catch(function (err) {
            response.status(400);
            response.json({ error: "Bad request." });
        });
    } catch (error) {
        console.log(error);
    }
});

//Criando o Servdor
http.createServer(app).listen(3000);