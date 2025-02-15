const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")
const app = express();
app.use(express.json());

app.use("/api/v1/user" , userRouter );
app.use("/api/v1/admin" , adminRouter );
app.use("/api/v1/course" , courseRouter);

async function main() {
    await mongoose.connect("mongodb+srv://amitt:BwMOBe31lgZs2sbC@cluster0.t6n5j.mongodb.net/CourseSellingApp");
    app.listen(3000);
}

main();


