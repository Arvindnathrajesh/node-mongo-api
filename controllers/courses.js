const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const courseModel = mongoose.model("courses")


router.get('/list',(req,res)=>{

    courseModel.find((err,docs)=>{

        if(!err)
        {
            res.json({message: "Successfull", status: "OK", data: docs})
        }
        else
        {
            req.json({status:"Not Ok", message: "Failed"})
        }
    })
    
})

router.post("/add", (req, res)=>{

    console.log(req.body);

    var course = new courseModel();
    course.courseName = req.body.courseName;
    course.courseId = req.body.courseId;
    course.courseFee = req.body.courseFee;

    
    // course.courseName = "bio"
    // course.courseId = 1;
    // course.courseFee = 1000;

    course.save((err,docs)=>{
        if(!err)
        {
            res.json({message: "Successfull", status: "OK", data: req.body})
        }
        else
        {
            res.json({status:"Not Ok", message: "Failed", error: err})
        }
    });
});

module.exports = router