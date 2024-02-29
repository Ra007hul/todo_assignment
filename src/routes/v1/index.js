const express = require('express');
const task = require('../../controller/task-controller')
const user = require('../../controller/user-controller')

const router = express.Router();

router.post('/task',task.create)
router.post('/user',user.create)
module.exports=router