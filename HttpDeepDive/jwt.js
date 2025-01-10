const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'ilovemyself'
const app = express();
app.use(express.json());

const users = [];


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
// convert this username to a token using JWT_SECRET     
// jwt.sign -> takes two arguments , argument 1st what do you want to encode , ecrypt in our case it is username , what is your secret that you are using to sign this specific token
        const token = jwt.sign({
            username: username
        } , JWT_SECRET); // convert their username over to a jwt
       
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


app.get("/me", (req, res) => {
    const token = req.headers.token; // they will send your a jwt

    // how can you this user in global variable in database
    const decodedInformation = jwt.verify( token , JWT_SECRET );
    // { username: "amitranga@gmail.com" }

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