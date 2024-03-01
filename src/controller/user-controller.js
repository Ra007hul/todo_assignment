
const userService = require('../services/user-service')

const userServiceInstance = new userService()

const signup = async (req,res)=>{
    try {
     const response = await userServiceInstance.signup({
         email : req.body.email,
         password : req.body.password,
         username : req.body.username,
         phone_number : req.body.phone_number
     })

     return res.status(201).json({
         success : true,
         message  : 'Successfully created a new user',
         data  : response,
         err : {}
     })

    } catch (error) {
       return res.status(500).json({
         success : false ,
         message : "can't able to create the user",
         data : repsonse , 
         err : {}
       })
    }

}
const login = async (req,res)=>{
    try {
       const user = await userServiceInstance.findByEmail(req.body.email);
       console.log(user)
        console.log("hello")
       if(!user){
          return res.status(401).json({
            message : "User not found",
            success : false
          })}
          console.log("1")
          if(!user.comparePassword(req.body.password)){
            return res.status(401).status({
              message : "Incorrect password",
              success : false
            })
          }
         
         const token = user.genJWT();
         return res.status(200).json({
          message : "login successful",
          success : true,
          data : token,
          err : {}
         })
  
       }
     catch (error) {
         return res.status(500).json({
            message : "Something went wrong",
            success : false,
         })
     }
  }
module.exports = {
    signup,
    login
}