const express = require("express");
const app = express();

// Create global middleware (app.use) which will rate limit request from user to only 5 request per second , if user sends more than 5 requests in a s single second , the server should block them with a 404
// user will be sending in thier user-id in header as 'user-id'
// You have been given a numberofRequestsForUser object to start off with which clears every one second

let numberofRequestsForUser = {};
setInterval(() => {
    numberofRequestsForUser = {};
} , 1000)

app.use(function(req,res,next){
    const userId = req.headers["user-id"];
    if(numberofRequestsForUser[userId]) {
        numberofRequestsForUser[userId]++;
        if(numberofRequestsForUser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }
    } else {
        numberofRequestsForUser[userId] = 1;
        next();
    }
})
