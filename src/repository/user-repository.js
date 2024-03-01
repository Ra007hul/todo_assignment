const {User} = require('../db')

class UserRepository{
    async create(data){
        try{
           const result = await User.create(data);
           return result
        }
        catch(error){
           throw error
        }
    }

    async destroy(id){
        try {
            const result = await User.findByIdAndDelete(id);
            return result
        } catch (error) {
            throw error
        }
    }

    async get(id){
        try {
            const result = await User.findById(id);
            return result 
        } catch (error) {
            throw error
        }
    }

    async getAll(){
        try {
            const result = await User.find({});
            return result;
        } catch (error) {
           throw error
        }
    }

    async update(id ,data){
        try {
            const result = await User.findByIdAndUpdate(id , data,{new : true})
            return result
        } catch (error) {
            throw error
        }
    }
    async findBy(data){
        try {
           const response = await User.findOne(data);
           return response
        } catch (error) {
           throw error;
        }
     }
}

module.exports = UserRepository