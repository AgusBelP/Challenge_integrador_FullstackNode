const authModel = require('../model/authModel');
const bcrypt = require('bcrypt');


const registerUser = async (user) =>{

    const passwordHash = await bcrypt.hash(user.password, 8);

    const userSchema = {
        user_name : user.name,
        user_lastname: user.apellido,
        user_email: user.email,
        user_password : passwordHash
    }
    
    return await authModel.createUser([Object.values(userSchema)]);
}


module.exports ={
    registerUser
}