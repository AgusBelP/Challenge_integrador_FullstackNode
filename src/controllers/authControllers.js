const authServices = require ('../services/authServices');
const { initSession } = require('../utils/session');

const login = (req,res) => {
    const alert = []

    res.render('./auth/login', {
        view:{
            title:"Login | Funkoshop"
        },alert
    })
};

const login_post = (req,res) => {
    req.session.isLogged = true;

    res.redirect('/admin/admin')
    
};

const register = (req,res) => {
    const alert = []
    res.render('./auth/register', {
        view:{
            title:"Register | Funkoshop"
        },
        alert
    })
};

const register_post = async(req,res) => {
    const user = req.body;
    await authServices.registerUser(user);
    res.redirect('/auth/login')
};

const logout = (req,res) => {
    req.session.isLogged = false
    res.redirect('/home')

}

module.exports={
    login,
    login_post,
    register,
    register_post,
    logout
}