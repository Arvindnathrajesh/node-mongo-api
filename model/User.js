const mongoose = require("mongoose")
const{ boolean } = require("webidl-conversions")

var UserSchema = new mongoose.Schema({

        userName : {
            type : String,
            required : true,
            unique : true,
        },
        email : {
            type: String,
            required : true,
            unique : true,
        },
        password : {
            type: String,
            required : true,
        },
        isAdmin : {
            type : Boolean,
            default : false,
        },
    },
    {timestamps: true}
)

mongoose.model("User", UserSchema)