import { Router } from "express"
import { dbclient } from "../data/connectDb.js"
import { ObjectId } from "mongodb"

const taskRouter = Router()

taskRouter.post("/create",async (req,res) => {
    const newTask = {
        name : "viec 1",
        complete : false
    }   

    const collection = dbclient.db().collection("task")

    try {
        await collection.insertOne(newTask)
        const tasks = await collection.find().toArray()
        res.json(tasks)
    } catch (error) {
        console.log(err);
        res.json({complete : false})
    }  
})


taskRouter.get("/:id",async(req,res) => {
    const id = req.params.id
    const collection = dbclient.db().collection("task")
    const objectId = new ObjectId(id);

    try {
        const task = await collection.findOne({_id : objectId})
        res.json({data : task})
    } catch (error) {
        res.json({complete : false})
    }
})


taskRouter.get("/",async (req,res) => {
    try {
        const collection = dbclient.db().collection("task")
        const tasks = await collection.find().toArray()
        res.json(tasks)
    } catch (error) {
        res.json(error)
    }
})


taskRouter.put("/:id",async(req,res) => {
    try {
        const id = req.params.id
        const collection = dbclient.db().collection("task")

        const objectId = new ObjectId(id);
        // const test = await collection.findOne({_id : objectId})
        // console.log(test);

        const taskUpdate = await collection.updateOne({_id : objectId},{$set:{
            name : "viec 1 update"
        }})

        res.json({complete : true})
     } catch (err) {
        res.json(err)
    }
})

taskRouter.delete("/:id",async(req,res) => {
    try {
        const id = req.params.id
        const collection = dbclient.db().collection("task")
        const objectId = new ObjectId(id);

        await collection.deleteOne({_id  : objectId})
        res.json({complete : true})
    } catch (error) {
        res.json(error)
    }
})

export default taskRouter