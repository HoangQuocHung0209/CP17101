
const userModel = require('./User_model')
const bcrypt = require('bcryptjs');

exports.login = async (username, password) => {
    //fix code
    try {
        let user = users.filter(item => item.username == username);
        if (user.length > 0) {
            if (user[0].password == password) {
                return user[0];
            }
        }
        return null;
    } catch (error) {
        throw new Error('error');
    }
}



exports.checkUsername = async (username) => {
    try{
        let user = users.filter(item => item.username == username);
        if(user.length>0){
            return true;
        }else{
            return false;
        }
    }catch(e){
        throw new Error('error')
    }   
}


exports.signin = async (username) => {
    try {
        let user = await userModel.find({username});
        if(user.length>0){
            return user[0];
        }else{
            return null;
        }
    } catch (error) {
        throw new Error('error');
    }
}

exports.signup = async (username,password) => {
    const p = new userModel({username,password});
    return await p.save();
}



var users = [
    { _id: 1, username: 'admin', password: 'admin' },
    { _id: 2, username: 'user', password: 'user' },
]