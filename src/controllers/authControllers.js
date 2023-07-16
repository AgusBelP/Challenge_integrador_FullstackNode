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
    res.render('./auth/register', {
        view:{
            title:"Register | Funkoshop"
    }})
};

const register_post = (req,res) => {
    res.send("Debería enviar datos a la página de register")
};

module.exports={
    login,
    login_post,
    register,
    register_post
}