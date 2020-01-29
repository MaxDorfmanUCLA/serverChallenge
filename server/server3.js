var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.listen(3300, function() {
    console.log('Listening on port 3300');
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
    console.log('connected.');
});
var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
  sender: String,
  value: String
});
var User = mongoose.model('User', userSchema);



app.get('/', (req, res) => {
    User.find({ sender: 3 }, (err, posts) => {
      if (err) throw err;
    
      // show the admins in the past month
      console.log("all posts from server 3: ", posts);
    });
  res.status(201).send('posts loaded from db');
})

app.post('/', (req, res) => {
    // create a new user
    console.log('req.body.server:', req.body.server);
    console.log('req.body.value', req.body.value);
    var newUser = User({
        sender: req.body.server,
        value: req.body.value
    });
   
    // save the user
    newUser.save(function(err) {
        if (err) throw err;
        console.log('Post created!');
    });
    res.status(201).send('post added to db');
})