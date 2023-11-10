import { Router } from "express"
import { getIdUser, login, register } from "../controllers/auth.controller.js"

const authRouter = Router()

authRouter.get("/:id",getIdUser) // private
authRouter.post("/login",login) // public
authRouter.post("/register",register) // public

export default authRouter

// lam lai giong tao sau day thi tao 
// 1 middleware de check token