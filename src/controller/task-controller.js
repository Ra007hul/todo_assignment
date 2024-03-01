const taskService = require('../services/task-service')

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

module.exports = { 
    create
}