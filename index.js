import express from "express"
import authRouter from "./routers/auth.router.js"

const app = express()
app.use(express.json())


app.use("/api/auth",authRouter)


app.listen(5000,() => {
    console.log("server is running on PORT : ",5000);
})