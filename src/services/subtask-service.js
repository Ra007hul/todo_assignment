const SubtaskRepo = require('../repository/subtask-repository')



const SubtaskRepoInstance = new SubtaskRepo();

class Subtaskservice{
    async create(data){
        try {
            const subtask = await SubtaskRepoInstance.createSubtask(data)
            return subtask
        } catch (error) {
            console.log("subtask service layer error")
        }
    }

    async getAllSubtasks(data){
        try {
            console.log("service layer")
            const subtask = await SubtaskRepoInstance.getAllSubtasks(data)
            console.log(subtask)
            return subtask
        } catch (error) {
            console.log("subtask service layer error")
        }
    }

    async updateSubtask(id,data){
        try {
            const updatedSubtask = await SubtaskRepoInstance.updateSubtask(id,data)
            return updatedSubtask
        } catch (error) {
            console.log('service layer error')
        }
    }
}

module.exports=Subtaskservice