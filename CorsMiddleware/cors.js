// Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain. It's a crucial mechanism for managing cross-origin requests and ensuring secure interactions between different origins on the web.

// In node.js =>> cross origin requests are blocked

                    // ASSIGNMENT \\

// create a backend server in node.js that returns the sum endpoint
// write a html file , that hits backend server using 'fetch api'

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json); // if I don't use this then req.body would be undefined

app.use(cors()); // all frontend will be able to send the request

// app.use(cors({
//     domains: ["https://google.com" , "https://employee.google.com" ]
// }))  // you can restricts what all frontend should be allow to send the requestt

app.post("/sum" , function( req , res ) {
    const a = parseInt( req.body.a );
    const b = parseInt( req.body.b );

    res.json({
        answer: a + b
    })
})

app.listen(5000)