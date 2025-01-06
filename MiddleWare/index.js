// An express app is essentially a series of middleware calls
// Middleware can be Re-Used

const express = require("express");
const app = express();

// function that returns a boolean if the age of persom is more than 14
// function isOldEnough(age) {
//     if( age >= 14 ){
//         return true;
//     } else {
//         return false;
//     }
// }
 
function isOldEnoughMiddleware(req,res,next) {
    const age = req.query.age;
    if( age >= 14 ) next();
    else  {
        res.json({
           msg: "Sorry you have not of age yet"
        })
    }
}

// new way to introduce middlewares into each one of your routes
// app.use only triggers for all the endpoints below the app.use
app.use(isOldEnoughMiddleware); 

app.get("/ride2" , function(req,res) {
    res.json({
        msg: "You have successfully riden the ride 2",
    })
    // if( isOldEnough(req.query.age) ) {
    //    res.json({
    //         msg: "You have successfully riden the ride 2"
    //     })
    // } else {
    //     res.status(411).json({
    //         msg: "Sorry you are not of age yet"
    //     })
    // }
    
});

app.get("/ride1" , function(req,res) {
    res.json({
        msg: "You habe successfully riden the ride 1" ,
    });
   
    // if( isOldEnough(req.query.age) ) {
    //    res.json({
    //         msg: "You have successfully riden the ride 1"
    //     })
    // } else {
    //     res.status(411).json({
    //         msg: "Sorry you are not of age yet"
    //     })
    // } 
});

app.listen(3000); // for browser http://localhost:3000/ride1?age=11
















