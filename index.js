const express = require('express');
const app = express();
const server = require('http').Server(app);

const fs = require('fs');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/results/:identity/:game', async (req, res) => {
    const { identity, game } = req.params;

    console.log(identity, game, await req.body);
    
    res.sendStatus(200);
});

app.post('/api/login', async (req, res) => {
    const { identity, game } = req.params;

    console.log(identity, game, await req.body);
    
    res.sendStatus(200);
});

server.listen(8081, function () {
    console.log(`Listening on ${server.address().port}`);
});