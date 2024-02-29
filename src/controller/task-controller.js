const taskService = require('../services/task-service')

const taskServiceInstance = new taskService();

const create = async (req,res)=>{
    try {
        const task = await taskServiceInstance.create(req.body)
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