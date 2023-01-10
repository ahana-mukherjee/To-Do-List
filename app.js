const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

let items = ["Eat lunch", "Code some more"];

app.get("/", function (req, res){

    let day = date.getDate();

    res.render("list", {nameOfDay: day, newListItems: items});
})

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function (){
    console.log("Server running..");
})