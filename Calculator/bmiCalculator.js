const express = require("express");
const body = require("body-parser");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

app.post("/", function(req, res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = weight / height / height;
  res.send("Your BMI is: " + result);
});
