import { MongoClient } from "mongodb"
const stringConnect = 'mongodb+srv://Ngiad:Ngiad001@cluster0.2ts8aja.mongodb.net/'
export const dbclient = new MongoClient(stringConnect)


const connectDb  = async() => {
    try {
        await dbclient.connect()
        return "connect db thanh cong!!!!"
    } catch (error) {
        return error
    }
}


export default connectDb


