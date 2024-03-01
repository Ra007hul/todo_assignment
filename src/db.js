const mongoose = require('mongoose')

const jwt= require('jsonwebtoken')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://127.0.0.1:27017/openinapp_dev')
     .then(()=>{
        console.log("database connnection successfully")
     })
      .catch(error=> console.log("connection failed to database",error))


// Subtask Schema
const subtaskSchema = mongoose.Schema({
        task_id : { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'Task', 
          required : true
        },
        description : {
          type : String,
          required : true
        },
        status : {
          type : Number,
          enum : [0,1],
          default : 0
        },
        createdAt : {
          type : Date,
          Default : Date.now
        },
        updatedAt : {
          type : Date
        },
        deletedAt : {
          type : Date
        }
  })

//Task Schema
const taskSchema = mongoose.Schema({
        title : {
          type : String,
          required : true
        },
        description : String,
        dueDate : {
          type : Date,
          required : true
        },
        user : {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'User',
          required : true
        },
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
    email : {
      type : String,
    },
    password : {
      type : String,
      minlength: 8
    },
    phone_number : {
      type : Number,
      required : true,
    },
    priority : {
        type : Number,
        enum : [0,1,2],
        default : 2
    }
    
    
})
userSchema.pre('save', function(next){
  const user = this
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password,SALT)
  user.password = encryptedPassword;
  next()
})

userSchema.methods.comparePassword = function compare(password){
  return bcrypt.compareSync(password,this.password)
}
userSchema.methods.genJWT = function generate(){
  return jwt.sign({id : this._id,email:this.email},'openinapp_secret',{
      expiresIn : '1d'
  })
}


const User = mongoose.model('User',userSchema)
const Task = mongoose.model('Task',taskSchema)
const Subtask = mongoose.model('Subtask',subtaskSchema)

module.exports = {
    User,
    Task,
    Subtask
}

