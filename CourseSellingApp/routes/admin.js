
const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("./db")

adminRouter.post("/signup" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})

adminRouter.post("/signin" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})

// admin can create a course
adminRouter.post("/" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})

// admin allow change name of course , price of course etc.
adminRouter.put("/" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})

// give me all courses that i have
adminRouter.get("/bulk" , ( req , res ) => {
    res.json({
        message : "signup endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter
}