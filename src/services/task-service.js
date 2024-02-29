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
}

module.exports = TaskService