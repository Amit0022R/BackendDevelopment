// const express = require("express");
// const Router = express.Router;
const { Router } = require("express");
const { userModel } = require("./db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")

const userRouter = Router(); // router means jo request aari it route it to right place

    userRouter.post("/signup" , async ( req , res ) => {
        // userSchema -> email , password , firstname , lastname
        const { email , password , firstName , lastName } = req.body; // add zod validation here

        // hash the password so planetext password is not stored in the database

        // Put inside a try catch block
        await userModel.create({
            email , 
            password , 
            firstName ,
            lastName
        })

        res.json({
            message : "signup succeeded"
        })
    })
    
    userRouter.post("/signin" , async ( req , res ) => {

        const { email , password } = req.body;
        // findOne -> return either user , or undefined
        const user = await userModel.findOne({
            email ,
            password
        })

        if( user ) {
           const token =  jwt.sign({
                id : user._id
            } , JWT_USER_PASSWORD );
            
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
    
    userRouter.get("/purchases" , ( req , res ) => {
        res.json({
            message : "signup endpoint"
        })
    })
    
module.exports = {
    userRouter : userRouter
}