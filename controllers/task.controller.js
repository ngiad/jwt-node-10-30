import taskModel from "../Models/task.model.js";

export const CreateTask = async (req, res) => {
  const task = {
    title: "task : 2",
    complete: false,
  };

  try {
    const newTask = await taskModel.create(task);
    res.json({ data: newTask });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.json({ data: tasks });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateTask = async (req,res) => {
  const taskUpdate = {
    title: "task : 2 update!",
  }
  try {
    // check xem _id task co ton tai khong co thi cho update con khong thi bao loi
    const TaskUpdate = await taskModel.updateOne(
      { _id: "6560d431fcfffb2f5918e89d" },
      taskUpdate
    );
    res.json({ data: taskUpdate });
  } catch (error) {
    res.json({ error: error.message });
  }
};


export const deleteTask = async(req,res) => {
    const id = "6560d431fcfffb2f5918e89d"

    try {
        const taskRemove = await taskModel.findOneAndDelete({_id : id})
        res.json({data : {
            complete : true
        }})
    } catch (error) {
        res.json({ error: error.message });
    }
}

export const findOne = async(req,res) => {
    try {
        const task = await taskModel.findById(req.params.id)
        res.json({data: task})
    } catch (error) {
        res.json({ error: error.message });
    }
}
