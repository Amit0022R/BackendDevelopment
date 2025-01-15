const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Schema -> data kaise dikhega database mei final
// Schema means final Database mei kaisa structure jayega
const User = new mongoose.Schema({
    // cannot insert twice with same email
    email : { type : String , unique : true } , 
    password : String ,
    name : String
})

const Todo = new Schema({
    title : String , 
    done : Boolean ,
    userId : ObjectId
})

// User -> THis is strcuture of data that I wanna put in
// users -> THis is name of Database that I waana put in
const UserModel = mongoose.model('users' , User);
const TodoModel = mongoose.model('todos' , Todo);

module.exports = {
    UserModel : UserModel , 
    TodoModel : TodoModel
}

