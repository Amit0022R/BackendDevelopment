// The express.json() middleware is a built-in middleware function in Express.js used to parse incoming request bodies that are formatted as JSON.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// in express if you want to send JSON data , you need to first parse the json data

app.use(bodyParser.json());
// app.use(express.json());

app.post("/sum" , function( req  , res) {
    console.log(req.body);
    
    const a = parseInt( req.body.a );
    const b = parseInt( req.body.b );

    res.json({
        answer: a + b,
    })
})

app.listen(3000)