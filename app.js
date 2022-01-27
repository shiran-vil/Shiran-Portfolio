const express = require("express");
require("dotenv").config();
const app = express();
app.set('view engine', 'ejs');

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))



app.get("/", function(req, res) {
  res.render("portfolio")
});


app.listen(3000, function() {
  console.log("Server started successfully!");
});
