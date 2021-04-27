'use strict'

const express = require('express');
const path = require('path');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;
const WebSocket = require('ws');

const appW = express();
appW.use(express.static(path.join(__dirname, '/public')));

const server = createServer(appW);
const wss = new WebSocket.Server({ server });

wss.on('connection', function (ws) {
  const id = setInterval(function () {
    ws.send("Hello");
  }, 1000);
  console.log('started client interval');

  ws.on('close', function () {
    console.log('stopping client interval');
    clearInterval(id);
  });
});

server.listen(8080, function () {
  console.log('Listening on http://0.0.0.0:8000');
});






app.use(bodyParser.json());



app.get('/', function(req, res) {
  res.send('This the simple Webhook server sample.  Use POST methods instead of GET.');
});

app.get('/webhooks', function(req, res) {
  res.send('This the simple Webhook server sample.  Use POST methods instead of GET.');
});

app.post('/webhooks', function(req, res) {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(PORT, function() {
  console.log('Starting webhooks server listening on port:' + PORT);
});
