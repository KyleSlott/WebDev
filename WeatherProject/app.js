const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
const query = req.body.cityName;
const url = "https://api.weatherapi.com/v1/current.json?key=0f9c2685ea6c404e8aa191757222304&q=" + query + "&aqi=no";

https.get(url, function(response){
  console.log(response.statusCode);
  response.on("data", function(data){
    const weatherData = JSON.parse(data);
    console.log(weatherData);
    const temp = weatherData.current.temp_f;
    const condition = weatherData.current.condition.text;
    const icon = weatherData.current.condition.icon;
    const iconUrl = "https:" + icon;
    res.write("<p>" + temp + "</p>")
    res.write("<h1>" + condition + "</h1>");
    res.write("<img src= " + iconUrl + ">");
    res.send();
    console.log(condition);
  })
});
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
