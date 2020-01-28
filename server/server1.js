var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.listen(3100, function() {
    console.log('Listening on port 3100');
}) 
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded(extended = true));
app.use(express.static(path.join(__dirname, 'client/app.html')));


app.get('/', (req, res) => {
    res.send('hello from server 1');
})

app.post('/', (req, res) => {
    res.status(201).send(req.body);
})
