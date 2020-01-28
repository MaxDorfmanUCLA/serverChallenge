var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.listen(3300, function() {
    console.log('Listening on port 3300');
}) 
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded(extended = true));
app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    res.send('hello from server 3');
})

app.post('/', (req, res) => {
    res.status(200).send(req.body);
})