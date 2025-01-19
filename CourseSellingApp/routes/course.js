
    const { Router } = require("express")
    const courseRouter = Router();

    courseRouter.post("/purchase" , ( req , res ) => {
        res.json({
            message : "signup endpoint"
        })
    })
    
    courseRouter.get("/preview" , ( req , res ) => {
        res.json({
            message : "signup endpoint"
            // http://localhost:3000/course/preview show message
        })
    })
    



module.exports = {
    courseRouter : courseRouter
}