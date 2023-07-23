const { validationResult } = require('express-validator');

const validateInput= (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        const alert = errors.mapped();
        console.log(alert);
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


module.exports = {
    validateInput,
};