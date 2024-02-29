const userRepository = require('../repository/user-repository')

const userRepoInstance = new userRepository()

class UserService{
     async createUser(data){
        try {
           const user = await userRepoInstance.create(data)
           return user
        } catch (error) {
            console.log(error)
        }
     }
}

module.exports=UserService