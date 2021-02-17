const User=require('../schemas/user');

const creatUser = async (newUser) => {
    try{
        const userCreated = await User.create(newUser);
        console.log(userCreated);
        return userCreated;
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    creatUser
}