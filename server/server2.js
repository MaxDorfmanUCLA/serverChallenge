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


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/serverChallenge');
var db = mongoose.connection;
db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to mongoDB');
});
var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
  owner: Number,
  value: Number
});
var User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
    User.find({ owner: 2 }, (err, posts) => {
      if (err) throw err;
      console.log("all posts sent to server 2: ", posts);
      res.status(201).send(posts);
    });
  //res.status(201).send('posts loaded from db');
})

app.post('/', (req, res) => {
    var newUser = User({
        owner: 2,
        value: req.body.value
    });
   
    // save the user
    newUser.save(function(err) {
        if (err) throw err;
        console.log('Post created!');
    });
    res.status(201).send('post added to db in server 2');
})