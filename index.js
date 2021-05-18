const express = require('express');
const app = express();
const server = require('http').Server(app);

const fs = require('fs');

function getResults() {
   return  JSON.parse(fs.readFileSync('public/results.json', 'utf-8'));
}

function saveResults(results) {
    fs.writeFileSync('public/results.json', JSON.stringify(results));
 }

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/results/', async (req, res) => {
    const results = getResults() || [];
    const newResult = await req.body;
    results.push(newResult);
    saveResults(results);
    res.sendStatus(200);
});

app.post('/api/login', async (req, res) => {
    res.json({
        identity: "Robert Antipa"
    });
    res.sendStatus(200);
});

server.listen(8081, function () {
    console.log(`go to http://localhost:8081/`);
});