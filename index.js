
const express = require("express")
const application = express()
const connection = require("./model")
const bodyParser= require("body-parser")
const path = require("path")
const { engine } = require ('express-handlebars');
require("./model/User")

const courseController = require("./controllers/courses")
const authController = require("./controllers/auth")


application.use(bodyParser.urlencoded({
    extended:true
}))

// application.set('views',path.join(__dirname,"/views/"));


// application.engine('handlebars', engine());
// application.set('view engine', 'handlebars');
// application.set("views", "./views");
  

application.get("/",(req,res)=>{
    res.send("index")
})

application.use(express.json())
application.use("/course",courseController)
application.use("/api/auth", authController)

application.listen("3000",()=>{
    console.log("Server Up")
})