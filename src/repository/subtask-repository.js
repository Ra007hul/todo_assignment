const {Subtask}=require('../db')

class SubtaskRepository{
      async createSubtask(data){
        try {
            const subtask = await Subtask.create(data)
            return subtask
        } catch (error) {
            console.log("subtask repository error")
        }
      }

      async getAllSubtasks(data){
        try {
            console.log('inside repo layer')
            const subtask = await Subtask.find(data)
            console.log(subtask)
            return subtask
        } catch (error) {
            console.log("subtask repository error")
        }
      }
     async updateSubtask(id,data){
      try {
        const updatedTask = await Task.findByIdAndUpdate(id,data,{new : true})
             return updatedTask
      } catch (error) {
        console.log('repo layer error')
      }
     }
}

module.exports = SubtaskRepository