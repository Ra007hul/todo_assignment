const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/openinapp_dev')
     .then(()=>{
        console.log("database connnection successfully")
     })
      .catch(error=> console.log("connection failed to database",error))


// Subtask Schema
const subtaskSchema = mongoose.Schema({
        task_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
        description : String,
        status : {
          type : Number,
          enum : [0,1],
          default : 0
        }
  },{timestamps : true})

//Task Schema
const taskSchema = mongoose.Schema({
        title : {
          type : String,
          required : true
        },
        description : String,
        dueDate : Date,
        subtasks  : [subtaskSchema],
        priority : {
           type : Number,
           enum : [0,1,2,3,4,5],
           default : 5
        },
        status : {
           type : String,
           enum : ["TODO","IN_PROGRESS","DONE"],
           default : "TODO"
        }
   },{timestamps : true})

//User Schema
const userSchema = mongoose.Schema({
    username : {
      type : String,
      required : true,
      unique : true
    },
    phone_number : {
      type : Number,
      required : true,
    },
    priority : {
        type : Number,
        enum : [0,1,2],
        default : 2
    },
    task : [taskSchema]
    
})


const User = mongoose.model('User',userSchema)
const Task = mongoose.model('Task',taskSchema)
const Subtask = mongoose.model('Subtask',subtaskSchema)

module.exports = {
    User,
    Task,
    Subtask
}

