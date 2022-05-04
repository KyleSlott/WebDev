const express = require("express");

const app = express();
const date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
  var newListItems =[];
  let workItems = [];

app.get("/", function(req, res) {
  var currentDay = date.getDay();

  res.render("list", {
    listTitle: currentDay, newListItems: newListItems
  });
});

app.post("/", function(req, res){
  let item = req.body.newItem;
  if (req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
  newListItems.push(req.body.newItem);
  res.redirect("/");
  console.log(req.body.newItem);
  }
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
