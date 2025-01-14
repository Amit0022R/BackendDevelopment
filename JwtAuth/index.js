// Json web tokens are just like cheques , they are issued by backend when you sign in , Anyone can create something very similar , but the backend would reject it , if you lose the original jwt , then it is a problem

// JWT -> generate , decoding , verifying

const jwt = require("jsonwebtoken");

// generate jwt

const value = {
    name: "Amit" , 
    accountNumber: 123123123
}

// sign not generate
const token = jwt.sign(value , "secret")
// this token has been generated using this secret , and hence this token can only be verified using this secret
console.log(token);






