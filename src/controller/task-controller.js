const taskService = require('../services/task-service')
const mongoose = require('mongoose')

const taskServiceInstance = new taskService();

const create = async (req,res)=>{
    try {
        const { title, description, dueDate } = req.body;
        const user = req.user.id;
        const task = await taskServiceInstance.create({title,description,dueDate,user})
        return res.status(200).json({
            success : true,
            data : task
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            err : error
        })
    }

}

const getAllTask = async (req,res)=>{
    try {
        const user = req.user.id
        const response = await taskServiceInstance.getAllTask({user})
        return res.status(200).json({
            success : true,
            message  : "Successfully fetched all task",
            data : response
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            err : error
        })
    }
}

const updatedTask = async (req,res)=>{
    try {
        console.log('helo')
        const id = req.params.id
        console.log(id)
        const { dueDate, status } = req.body;
        const response = await taskServiceInstance.updateTask(id,{dueDate,status})
         return res.status(200).json({
            success : true,
            message  : "Successfully updated task",
            data : response
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            err : error
        })
    }
}

const deleteTask = async (req,res)=>{
    try {
        const id = req.params.id
        const response = await taskServiceInstance.deleteTask(id);
        return res.status(200).json({
            message : "Successfully deleted",
            success : response
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            err : error
        })
    }
}

module.exports = { 
    create,
    getAllTask,
    updatedTask,
    deleteTask
}