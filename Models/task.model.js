import mongoose from "mongoose";

// cach tao khuan mau 
const taskSchame = new mongoose.Schema({
    title : String,
    complete : Boolean
})


// tao va su dung model

const taskModel = mongoose.model("collection-task",taskSchame)

export default taskModel