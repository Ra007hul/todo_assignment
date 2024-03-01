const SubtaskService = require('../services/subtask-service')

const SubtaskServiceInstance = new SubtaskService();
const createSubtask = async (req,res)=>{
           try {
               const {task_id,description} = req.body
               const response = await SubtaskServiceInstance.create({task_id,description})

               return res.status(200).json({
                   success : true,
                   data : response
               })
           } catch (error) {
                return res.status(500).json({
                    message : "Internal server error",
                    success : false
                })
           }
}
const getAllSubtasks = async (req,res)=>{
    try {
        const { task_id } = req.body;
        console.log(task_id)
        const subtask = await SubtaskServiceInstance.getAllSubtasks({task_id})
        console.log(subtask)
        return res.status(200).json({
            success : true,
            message : "successfully getched all subtask",
            data : subtask
        })
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            success : false
        })
    }
}

const updateSubtask = async (req,res)=>{
    try {
        const { id } = req.params;
        const { status } = req.body;
        const response = await SubtaskServiceInstance.updateSubtask(id,{status});
        return res.status(200).json({
            success : true,
            message : "successfully update subtask",
            updateSubtask : response
        })
    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            success : false
        })
    }
}
module.exports = {
      createSubtask,
      getAllSubtasks,
      updateSubtask
}
