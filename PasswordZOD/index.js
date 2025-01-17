// # Improvements
// 1. Password is not hashed
// 2. A single crash (duplicate email) crashes the whole app
// 3. Add more endpoints (mark todo as done)
// 4. Add timestamp at which todo was created/the time it needs to be done by
// 5. Relationships in Mongo
// 6. Add validations to ensure email and password are correct format

const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel , TodoModel } = require("./db"); // import
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://amitt:BwMOBe31lgZs2sbC@cluster0.t6n5j.mongodb.net/todo-amit-17jan")

const app = express();
app.use(express.json()); // parsing body

app.post("/signup" , async ( req , res ) => {

    const email = req.body.email; // string
    const password = req.body.password; // string
    const name = req.body.name; // string
    // const { email, password, name } = req.body;

    let errorThrown = false;
        const hashedPassword = await bcrypt.hash( password , 5 );
        // console.log(hashedPassword);
        
        // Schema ->> email , password , name
        await UserModel.create({
            email : email , 
            password : hashedPassword , 
            name : name
        })
    
        res.json({
            message : "You are signed in"
        })
    

});

app.post("/signin" , async ( req , res ) =>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email
    })

    if( !user ) {
        res.status(403),express.json({
            message : "User does not exist in our db"
        })
    }

    const passwordMatch = await bcrypt.compare( password , user.password );

    if( passwordMatch ) {
        const token = jwt.sign({
// user._id is represented as object , if you try to encode object it becomes undefined so use tostring()   
          id : user._id.toString()
        } , JWT_SECRET )
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
app.post("/todo" , auth , ( req , res ) => {
    const userId = req.userId;
    const title = req.body.title;
    TodoModel.create({
        title ,
        userId
    })
    res.json({
        userId : userId
    })
});

app.get("/todos" , auth , async ( req , res ) => {
    // req.userId
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId : userId
    })
    res.json({
        todos
    })
});

app.listen(3000);






























