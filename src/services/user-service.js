const userRepository = require('../repository/user-repository')

const userRepoInstance = new userRepository()

class UserService{
   async signup(data){
      const user = await userRepoInstance.create(data);
      return user
  }
  async findByEmail(email){
   try {
       const user = await userRepoInstance.findBy({email})
       return user;
       
   } catch (error) {
       console.log("Service layer error")
       throw error;
   }
}
}

module.exports=UserService