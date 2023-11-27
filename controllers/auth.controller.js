import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"


const dataUser = [{id : 1,username : "nghia123",password : "123456"}]

const sign = (user) => {
    return jwt.sign(user,"ngiad",{
        expiresIn : "8h"
    })
} // thang nay ma hoa du lieu va tra ra token

const verify = (token) => {
    return jwt.verify(token,"ngiad")
} // giai ma token tra lai du lieu


export const login = async(req,res) => {
    const {username , password} = req.body
    const findIndex = dataUser.findIndex((item) => item.username === username)
    console.log(dataUser[findIndex].password);
   const veryfiedPassWork = await bcrypt.compare(password,dataUser[findIndex].password) // kiem tra nguoi dung nhap dung voi pass dc hash khong
    console.log(veryfiedPassWork);
    const token = sign({username , password})
    res.json({token})
}


export const register = async(req,res) => {
    const {username , password} = req.body

    const salt = await bcrypt.genSalt(10) // tao chuoi ma hoa
    const newPassword = await bcrypt.hash(password,salt) // ma hoa theo chuyen duoc tao

    console.log(newPassword);
    console.log(typeof newPassword);

    dataUser.push({username , password : newPassword,id : dataUser.length + Math.random()})
    const token = sign({username , password})
    console.log(dataUser);
    res.json({token})
}

export const getIdUser = (req,res) => {
    const id = req.params.id 
    const user = dataUser.find((item) => item.id === +id)
    const token = req.headers.token 

    if(!token) return  res.json({error : "token not found!"})
    
    const check = verify(token)

    if(check && user) res.json(user)
    else res.json({error : "user not found!"})
}
