const express = require("express");
const app = express();
// app.set('view engine', 'ejs');
//
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function() {
  console.log("Server started successfully!");
});
