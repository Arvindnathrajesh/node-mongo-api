const mongoose = require("mongoose")

var courseSchema = new mongoose.Schema({
    courseName : {
        type : String
    },
    courseId : {
        type: Number
    },
    courseFee : {
        type: Number
    }

})

mongoose.model("courses", courseSchema)