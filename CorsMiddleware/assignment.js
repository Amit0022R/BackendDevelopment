// Middleware may or may not change the request object 
// Middleware will either stop the request right there or forward the request to real route handler
// Express is a chain of middleware

                // Assignment \\

// Create a middleware function that :-
// 1) logs each incoming request’s HTTP method
// 2) URL 
// 3) and timestamp to the console

const express = require("express");

const app = express();

function logger( req , res , next ) {
    console.log( "Method is: " +  req.method);
    console.log( "Host is: " +  req.hostname);
    console.log("Current date is: " + new Date());
    next();
}

app.use(logger)

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);