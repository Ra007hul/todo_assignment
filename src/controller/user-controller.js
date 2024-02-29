
const userService = require('../services/user-service')

const userServiceInstance = new userService()

const create = async (req,res)=>{
    try {
        const user = await userServiceInstance.createUser(req.body)
        return res.status(200).json({
            success : true,
            data : user
        })
    } catch (error) {
        return res.status(500).json({
            success : false
        })
    }
}

module.exports = {
    create
}