const {Task} = require('../db')

class TaskRepository{

    async createTask(data){
        try {
            const createdtask = await Task.create(data)
               return createdtask
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TaskRepository