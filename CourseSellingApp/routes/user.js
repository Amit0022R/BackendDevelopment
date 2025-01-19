// const express = require("express");
// const Router = express.Router;
const { Router } = require("express");

const userRouter = Router(); // router means jo request aari it route it to right place

    userRouter.post("/signup" , ( req , res ) => {
        res.json({
            message : "signup endpoint"
        })
    })
    
    userRouter.post("/signin" , ( req , res ) => {
        res.json({
            message : "signup endpoint"
        })
    })
    
    userRouter.get("/purchases" , ( req , res ) => {
        res.json({
            message : "signup endpoint"
        })
    })
    
module.exports = {
    userRouter : userRouter
}