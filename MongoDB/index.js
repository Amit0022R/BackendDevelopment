// Notion =>> https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e

// MongoDB -> NoSQl databases

// Things to learn :--
// ->> Creating a free mongodb cloud server
// ->> Connecting your full stack application to mongodb
// ->> Defining the schema
// mongoose
// CRUD operations

// SCHEMA ->> how my data look like in database
// MongoDB -> SchemaLess

const express = require("express");
const { UserModel , TodoModel } = require("./db"); // import
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")
const JWT_SECRET = "amit@123"
mongoose.connect("mongodb+srv://amitt:BwMOBe31lgZs2sbC@cluster0.t6n5j.mongodb.net/todo-amit-2025")
const app = express();
app.use(express.json()); // parsing body

app.post("/signup" , async ( req , res ) => {

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    // const { email, password, name } = req.body;

    // Schema ->> email , password , name
    await UserModel.create({
        email : email , 
        password : password , 
        name : name
    })
    
    res.json({
        message : "You are logged in"
    })

});

app.post("/signin" , async ( req , res ) =>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email , 
        password : password
    })

    if( user ) {
        const token = jwt.sign({
          id : user._id
        })
        res.json({
            token
        });
    } else {
        res.status(403).json({
            message : "Incorrect Credential Sir!!"
        })
    }

});

// user will hit this endpoint to create a todo in database. 
app.post("/todo" , ( req , res ) => {

});

app.get("/todos" , ( req , res ) => {

});

app.listen(3000);











