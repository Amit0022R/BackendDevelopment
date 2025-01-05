                        // REQUEST METHOD
// GET ->> Going for consultation to get a check uop
// POST ->> Going to get new Kidney inserted
// PUT ->> Going to get kidney Replaced
// DELETE ->> GOing to get kidney removed

                        // Status Code
// 200 ->> Everything went fine
// 404 (route not present) ->> Doctor is not in hospital
// 500 (throw exception) ->> Mid Surgery light went away
// 411 ->> Input were incorrect , wrong person came to suregery

const express = require("express");
const app = express();

// req and res => request and response
app.get("/" , function(req,res) {

})

app.listen(3000);