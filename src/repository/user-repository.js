const {User} = require('../db')

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserRepository