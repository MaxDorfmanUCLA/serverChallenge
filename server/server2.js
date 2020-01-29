var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.listen(3200, function() {
    console.log('Listening on port 3200');
}) 
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded(extended = true));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    res.send('hello from server 2');
})

app.post('/', (req, res) => {
    res.status(200).send(req.body);
})