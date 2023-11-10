import jwt from "jsonwebtoken"


const dataUser = [{id : 1,username : "nghia123",password : "123456"}]

const sign = (user) => {
    return jwt.sign(user,"ngiad",{
        expiresIn : "8h"
    })
} // thang nay ma hoa du lieu va tra ra token

const verify = (token) => {
    return jwt.verify(token,"ngiad")
} // giai ma token tra lai du lieu


export const login = (req,res) => {
    const {username , password} = req.body
    const token = sign({username , password})
    res.json({token})
}


export const register = (req,res) => {
    const {username , password} = req.body

    dataUser.push({username , password,id : dataUser.length + Math.random()})
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
