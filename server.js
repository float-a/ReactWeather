var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;


var cors = require('cors');

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log("Express server is up on port" + PORT);
})