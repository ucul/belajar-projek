var express = require("express");
var path = require("path");

// Inittial app
var app = express();

// View engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Setup public folder
app.use(express.static(path.join(__dirname,'public')));

// App
app.get("/",function(req,res){
 res.send("index");
})

// Setuo server
var port = 3000;
app.listen(port,function(){
    console.log("Server running on port" + port);
})
