//  Can you try creating a MIDDLEWARE called AUTH that verifies if a user is logged in and ends the request early if the user isn’t logged in?



// Notion Link -> https://petal-estimate-4e9.notion.site/Authentincation-a4b43c7cc1d14535a7b5b366080095fa

// How to send jwt in response headers?
// ANS -> Way to send header back is:
// res.header("jwt" , token )


const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "amit@1266663"
const app = express();
app.use(express.json()); // for use req.body in username/password
const users = []

// localhost:3000
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


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

    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
        const token = jwt.sign({
            username               // username: username
        } , JWT_SECRET);

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

function auth( req , res , next ) {
    const token = req.headers.token;
    const decodedData = jwt.verify( token , JWT_SECRET );
    if(  decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        })
    }

    next();
}

// middleware -> things that runs first before actual handler runs
app.get("/me", auth ,  (req, res) => {
    const currentUser = req.username
    let foundUser = null;

    for( let i = 0; i < users.length; i++ ) {
        if( users[i].username === currentUser ) {
            foundUser = users[i];
        }
    }
    
    res.json({
            username: foundUser.username ,
            password: foundUser.password
        })
    
})

app.listen(3000);


















