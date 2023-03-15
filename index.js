const express = require("express");
const bodyParser = require("body-parser");
const { DBInit } = require("./connections");
const { sequelize } = require("./connections");
const Sequelize = require("sequelize");
const user = require("./models/user");
const text = require("./models/text")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req, res)=> {
res.send("hello from server"); 
});

app.post("/data", (req, res)=> {
    const User = user(sequelize, Sequelize.DataTypes );
    User.create();
    const Text = text(sequelize, Sequelize.DataTypes);
    Text.create();
 })

// app.post("/data", (req, res)=> {
//    const User = user(sequelize, DataType)
//    User.create()
// })

DBInit();

app.listen(7000, ()=>{
    console.log("server running at http://localhost:7000/");
});

