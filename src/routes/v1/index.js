const express = require('express');
const task = require('../../controller/task-controller')
const user = require('../../controller/user-controller')
const {authentication}=require('../../middlewares/authentication')

const router = express.Router();

router.post('/task',authentication,task.create)
router.post('/signup',user.signup)
router.post('/login',user.login)



module.exports=router