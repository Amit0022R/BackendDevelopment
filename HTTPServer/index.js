// CRUD ->> Create , Read , Update , Deletef

    // METHHOD \\
// CREATE ->> POST Request
// READ ->> GET Request
// UPDATE ->> PUT Request
// DELETE ->> DELETE Request

// http => 80
// https => 80

// JSON ->> Javascript Onject Notation

            // Backend for an TODO app (HTTP)

    const express = require('express')
    const app = express()
            
    // define all of yours route handlers
    app.get('/', function (req, res) { // whenever get request comes to '/' end point plz run this code 
    // res.send('Hello World')
    res.send("<b>Hi baby I am learning HTTP server</b>")
    })
   
    app.post('/', function (req, res) { 
    res.send('Hello Post Worldd')
    })
    
    app.listen(3000) // which port do you listen on
    // http://localhost:3000/ link for window tab ->> runs in our machine
