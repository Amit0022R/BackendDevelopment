// Notion Link -> https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fa

// How to send jwt in response headers?
// ANS -> Way to send header back is:
// res.header("jwt" , token )


const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "amit@123"
const app = express();
app.use(express.json()); // for use req.body in username/password
const users = []

app.post("/signup" , function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })
    // we should check if a user with this username already exists
        res.json({
            message: "Hey you are signed in"
        })
        console.log(users);
})

app.post("/signin" , function(req,res) {
    // extract username & password 
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username               // username: username
        } , JWT_SECRET);
        
        // res.header("jwt"  , token)
        // res.header("random" , "Amit" )

        res.send({
           token: token
        })
    } else { // user doesn't exist
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me", (req, res) => {
    const token = req.headers.token; 
    // verify the token
    const decodedInformation = jwt.verify( token , JWT_SECRET );

    const username = decodedInformation.username;
    
    const user = users.find(user => user.username === username);
    
    if (user) {
        res.send({
            username: user.username ,
            password: user.password
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000);


















