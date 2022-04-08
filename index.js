
const express = require("express")
const application = express()
const connection = require("./model")
const bodyParser= require("body-parser")
const path = require("path")
// const expressHandlebars = require("express-handlebars")
const { engine } = require ('express-handlebars');

application.use(bodyParser.urlencoded({
    extended:true
}))

application.set('views',path.join(__dirname,"/views/"));


application.engine('handlebars', engine());
application.set('view engine', 'handlebars');
application.set("views", "./views");

application.get("/",(req,res)=>{
    res.send("get tired ")
})

application.listen("3000",()=>{
    console.log("Server Up")
})