var express = require('express');

//Create our app
var app = express();

var cors = require('cors');

//use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.static('public'));

app.listen(3000, function(){
    console.log("Express server is up on port 3000");
})