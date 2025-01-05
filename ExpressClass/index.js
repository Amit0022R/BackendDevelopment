// HTTP ->> Hyper Text Transfer Protocol

const express = require("express");

function calculateSum(n) {
    let ans = 0;
    for( let i = 1; i <= n; i++ ) {
        ans = ans + i;
    }
    return ans;
}
const app  = express();
app.get("/" , function(req , res) {
    const n = req.query.n; // input n
    const ans = calculateSum(n);
    res.send("Hi , your ans is: " +  ans.toString());
})
app.listen(3000); // http://localhost:3000/?n=100
// everything after question mark is not counted in route

