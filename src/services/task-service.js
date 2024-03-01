const taskRepo = require('../repository/task-repository')

const taskRepoInstance = new taskRepo()

class TaskService{ 
    async create(data){
        try {
            const task = await taskRepoInstance.createTask(data)
             return task
        } catch (error) {
            console.log(error)
        }
    }
    async getAllTask(data){
        try {
            console.log("inside service layer")
            const task = await taskRepoInstance.getAllTask(data)
            console.log(task)
             return task
        } catch (error) {
            console.log(error)
        }
    }

    async updateTask(id ,data){
        try {
            console.log("inside service layer")
            const task = await taskRepoInstance.updateTask(id,data)
            console.log(task)
             return task
        } catch (error) {
            console.log(error)
        }
    }

    async deleteTask(id){
        try {
             await taskRepoInstance.deleteTask(id)
             return true
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TaskService