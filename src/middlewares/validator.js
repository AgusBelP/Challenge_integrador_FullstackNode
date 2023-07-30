const { validationResult } = require('express-validator');

const validateInput= (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        const alert = errors.mapped();

        res.render('./auth/register', {
        view:{
            title:"Register | Funkoshop"
        },
        alert
    })
    }else{
        next ();
    }
    
};

const validateLogin= (req, res, next) => {
    const errorsLogin = validationResult(req);

    if (!errorsLogin.isEmpty()){
        const alert = errorsLogin.mapped();

        res.render('./auth/login', {
        view:{
            title:"Login | Funkoshop"
        },
        alert
    })
    }else{
        next ();
    }
    
};


module.exports = {
    validateInput,
    validateLogin
};