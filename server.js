
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3306;
var htmlroutes = require('./routes/htmlRoutes.js');
var apiroutes = require('./routes/apiRoutes.js');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(apiroutes)
app.use(htmlroutes)


app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT)
})