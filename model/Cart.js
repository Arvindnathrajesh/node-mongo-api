const mongoose = require("mongoose")


var CartSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        products :[
            {
                productId:{ type: String},
                quantity: { type: Number, default: 1}
            },
        ],
    },
    {timestamps : true}
)

mongoose.model("Cart", CartSchema)