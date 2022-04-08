const mongoose = require("mongoose")

var courseSchema = new mongoose.Schema({
    courseName : {
        type : String,
        required : "Required"
    },
    courseId : {
        type: Number
    },
    courseFee : {
        type: Number
    }

})

mongoose.model("course", courseSchema)