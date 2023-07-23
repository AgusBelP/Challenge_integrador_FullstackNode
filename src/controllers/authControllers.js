const authServices = require ('../services/authServices')

const login = (req,res) => {
    res.render('./auth/login', {
        view:{
            title:"Login | Funkoshop"
    }})
};

const login_post = (req,res) => {
    res.send("Debería enviar datos a la página de login")
    
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

module.exports={
    login,
    login_post,
    register,
    register_post
}