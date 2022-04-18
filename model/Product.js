const mongoose = require("mongoose")


var ProductSchema = new mongoose.Schema(
    {
        title : {
            type: String,
            required : true,
            unique : true,
        },
        desc : {
            type: String,
            required : true,
        },
        img : {
            type: String,
            required : true,
        },
        catgories : {
            type: Array,
        },
        size : {
            type: String,
        },
        color : {
            type: String,
        },
        price : {
            type: Number,
            required : true,
        },
    },
    {timestamps : true}
)

mongoose.model("Product", ProductSchema)