'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());



app.get('/', function(req, res) {
  res.send('This the simple Webhook server sample.  Use POST methods instead of GET.');
});

app.get('/webhooks', function(req, res) {
  res.send('This the simple Webhook server sample.  Use POST methods instead of GET.);
});

app.post('/webhooks', function(req, res) {
  console.log(JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(PORT, function() {
  console.log('Starting webhooks server listening on port:' + PORT);
});
