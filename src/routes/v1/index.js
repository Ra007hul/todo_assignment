const express = require('express');
const task = require('../../controller/task-controller')
const user = require('../../controller/user-controller')
const subtask = require('../../controller/subtask-controller')
const {authentication}=require('../../middlewares/authentication')

const router = express.Router();

function test(){
    console.log('hello')
}

router.delete('/task/:id',authentication,task.deleteTask)

router.patch('/subtask/:id',authentication,subtask.updateSubtask)
router.patch('/task/:id',test,authentication,task.updatedTask)

router.post('/task',authentication,task.create)
router.post('/signup',user.signup)
router.post('/login',user.login)
router.post('/subtask',authentication,subtask.createSubtask)

router.get('/task',authentication,task.getAllTask)
router.get('/subtask',authentication,subtask.getAllSubtasks)




module.exports=router