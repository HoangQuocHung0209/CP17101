
const userService = require('./User_service');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.login = async (username, password) => {
    try {
        return await userService.login(username, password);
    } catch (error) {
        throw new Error('error: ');
    }
}

exports.singup = async (username, password) => {
    try {
        const check = await userService.checkUsername();
        if (check) {
            throw new Error('Tài khoản đã tồn tại')
            return;
        }
        const hashPassword = await bcryptjs.hashSync(password, 10);
        return await userService.signup(username, hashPassword);
    } catch (error) {
        throw new Error(error.message || 'error')
    }
}


exports.singin = async (username, password) => {
    try {
        const user = await userService.signin(username);
        if(user){
            const check = bcryptjs.compareSync(password,user.password);
            if(check){
                //tạo token với username là id của user
                return user;
            }else{
                throw new Error('Đăng nhập không thành công')
            }
        }else{
            throw new Error('Đăng nhập không thành công')
        }
    } catch (error) {
        throw new Error(error.message || 'error');
    }
}
