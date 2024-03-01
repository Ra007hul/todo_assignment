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
            console.log("inside repo layer")
            const tasks = await Task.find(data)
            console.log(tasks)
            return tasks
        } catch (error) {
            console.log("repsository layer error")
        }
    }
}

module.exports = TaskRepository