// Methods:-
// Get -> get all the post
// Post -> post a new tweet
// Put/Patch -> to change tweet
// Delete -> to delete a post

// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply/10/20
// 2. http://localhost:3000/sum/10/10
// 3. http://localhost:3000/divide/10/5
// 4. http://localhost:3000/subtract/20/15

// localhost:3000/multiply?a=7&b=2
// or localhost:3000/multiply/1/2

const express = require("express");
const app = express();

// parseInt se string ko int mei chg krdega, sirf req.query.a and req.query.b krke add kre the 12 (a=1,b=2) jbki ans = 3 anaa chie

// dynamic routes ->> localhost:3000/sum/1/2
app.get("/sum/:a/:b" , function(req,res) { 
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a + b
    })
})

//Multiply & Division mein parseInt na bhi kre toh chalega
 app.get("/multiply/:a/:b" , function(req,res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a * b
    })
 })

app.get("/divide/:a/:b" , function(req,res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a / b
    })
})

app.get("/subtract/:a/:b" , function(req,res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        answer: a - b
    })
})

app.listen(3000);