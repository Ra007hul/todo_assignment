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

    async deleteTask(id){
        try {
              await Task.findByIdAndDelete(id)
               return true
        } catch (error) {
            console.log(error)
        }
    }
    async updateTask(id,data){
        try {
            const updatedTask = await Task.findByIdAndUpdate(id,data,{new : true})
             return updatedTask
      } catch (error) {
          console.log(error)
      }
    }
    async getAllTask(data){
        try {
            const user = req.body.user
            const tasks = await Task.find({user})
            return tasks
        } catch (error) {
            
        }
    }
}

module.exports = TaskRepository