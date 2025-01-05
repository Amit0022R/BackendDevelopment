                    // In Memory Hospital
// (You need to create 4 routes (4 things that hospital can do)
// GET ->> user can check how many kidneys they have and thier health
// POST ->> user can add a new kidney
// PUT ->> user can replace kidney , make it healthy
// DELETE ->> user can remove kidney

const express = require("express");
const app = express();

var users = [{
    name: 'Amit' , 
    kidneys: [{
        healthy: false
    } ]
}];

// to be able to pass and get JSON body on server(for app.post)
app.use(express.json());

                        // GET
app.get("/" , function(req,res) {
    const amitKidneys = users[0].kidneys; // acces user
    const numberOfKidneys = amitKidneys.length; // total kidneys
    
    let numberOfHealthyKidneys = 0;
    for( let i= 0; i < amitKidneys.length; i++  ) {
        if( amitKidneys[i].healthy ) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
            // numberOfHealthyKidneys++;
        }
    }

    // unhealthy kidneys
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys; // unhealthy = total - healthy

    res.json({
        numberOfKidneys , 
        numberOfHealthyKidneys , 
        numberOfUnhealthyKidneys
    })
})

                        // POST
app.post("/" , function(req,res) {
 // in post you send data in body
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!!"
    })
})

                    // PUT
// replace all kidneys and make them healthy
app.put("/" , function(req , res) {
    for( let i = 0; i < users[0].kidneys.length; i++ ) {
        users[0].kidneys[i].healthy = true; // user ki kidneys ko iterate krna hai healthy krne k lie
    }
    res.json({});
})

                    // DELETE
// removing all unhealthy kidneys
app.delete("/" , function(req,res) {
    const newKidneys = [];
    for( let i = 0; i < users[0].kidneys.length; i++ ) {
        if( users[0].kidneys[i].healthy ) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done sir"});
})

app.listen(3000);