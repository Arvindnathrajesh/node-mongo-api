const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ArvindNath:pass%40123@cluster0.9tist.mongodb.net/borz?retryWrites=true&w=majority", (error)=>{

    if(error)
    {
        console.log("Something wrong in connecting to DB")
    }
    else
    {
        console.log("Connection to DB successful")
    }
})

const course= require("./course.model")