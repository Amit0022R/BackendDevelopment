//  What we'll learn
//  - Auth basics
//  - JWT ( JSON Web Tokens )
//  - Authorization Header
//  - Creating your own auth middleware
//  - localStorage

// when you are signing in on website , whenever send request or send your username & password , the server returns you a TOKEN, you store this TOKEN in your browser and in every subsequent request be it to get your post , be it send your message to your friend , you send across this token that is how facebook , twiiter knows that you are amit , that TOKEN you need to keep very safe


                // Creating an express app
        
// 1) Initialise an empty Node.js project
// 2) Create an index.js file, open the project in visual studio code
// 3) Add express as a dependency
// 4) Create two new  POST routes, one for signing up and one for signing in
// 5) Create an in memory variable called users where you store the username , password and a token (we will come to where this token is created later.
// 6) Complete the signup endpoint to store user information in the in memory variable
// 7) Create a function called generateToken that generates a random string for you


const express = require("express");
const app = express();
app.use(express.json());

const users = [];

// should return a random long string
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup" , function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
        res.json({
            message: "Hey you are signed in"
        })
    
        console.log(users);
     
})

app.post("/signin" , function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken();
        user.token = token; //  generate a token for the user and put it in the in memory variable for that user
        res.send({
           token: token
        })
        
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
        
})

// after user signin how can they ask for their information.
// Let’s create an endpoint (/me ) that returns the user their information `only if they send their token
app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const user = users.find(user => user.token === token);
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


app.listen(3000); // http server is listening on port 3000