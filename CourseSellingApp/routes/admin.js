
const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("./db")
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const course = require("./course");
const { courseModel } = require("./db");

adminRouter.post("/signup" , async ( req , res ) => {
    const { email , password , firstName , lastName } = req.body; // add zod validation here

    await adminModel.create({
        email , 
        password , 
        firstName ,
        lastName
    })

    res.json({
        message : "signup succeeded"
    })
})

adminRouter.post("/signin" , async ( req , res ) => {
    const { email , password } = req.body;
    
        const admin = await adminModel.findOne({
            email ,
            password
        })

        if( admin ) {
           const token =  jwt.sign({
                id : admin._id
            } , JWT_ADMIN_PASSWORD );
            
            res.json({
                token
            })
        }

        else {
            res.json({
                message : "Incorrect Credentials"
            })
        }
})

// admin can create a course
adminRouter.post("/course" , adminMiddleware , async ( req , res ) => {
    const adminId = req.userId;
    
    const { title , description , imageUrl , price } = req.body;

    const course =  await courseModel.create({
        title , description , imageUrl , price , creatorId : adminId
    })

    res.json({
        message : "Course created" , 
        courseId : course._id
    })
})

// admin allow change name of course , price of course etc.
adminRouter.put("/course" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})

// give me all courses that i have
adminRouter.get("/course/bulk" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter
}