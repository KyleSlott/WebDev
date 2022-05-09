var superheroes = require("superheroes");
var supervillains = require("supervillains");
const fs = require("fs");
var heroName = superheroes.random();
var villainName = supervillains.random();
console.log(heroName);
console.log(villainName);
