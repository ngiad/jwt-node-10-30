import express from "express"
import authRouter from "./routers/auth.router.js"
import mongoose from "mongoose"
import taskRouter from "./routers/task.router.js"

const app = express()
app.use(express.json())


app.use("/api/auth",authRouter)
app.use("/api/tasks",taskRouter)


mongoose.connect("mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net/")
.then(() => {
    app.listen(5000,() => console.log("server is running : ",5000))
})
.catch((err) => {
    console.log(err);
})


