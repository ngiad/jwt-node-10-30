import express from "express"
import authRouter from "./routers/auth.router.js"
import connectDb from "./data/connectDb.js"
import taskRouter from "./routers/task.router.js"

const app = express()
app.use(express.json())


app.use("/api/auth",authRouter)
app.use("/api/task",taskRouter)


connectDb().then((data) => {
    app.listen(5000,() => {
        console.log(data);
        console.log("server is running on PORT : ",5000);
    })
}).catch((err) => {
    console.log("xay ra loi");
})


