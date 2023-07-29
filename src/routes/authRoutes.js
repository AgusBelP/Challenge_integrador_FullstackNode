const express = require('express');
const router = express.Router();
const authModel = require('../model/authModel')
const validator = require('../middlewares/validator');
const { check } = require('express-validator');

const bcrypt = require('bcrypt');

const registerValidation = [
    check('email')
    .isEmail().withMessage('El correo ingresado no es válido')
    .trim().not().isEmpty().withMessage('Este es un campo obligatorio')
    .custom(async value =>{
        let user_exists = await authModel.userExists({user_email: value});
        if(user_exists != ""){
            throw new Error('El usuario ya se encuentra registrado en nuestra base de datos');
        }}),                 
    check('password')
    .isLength({ min:9 }).withMessage('La contraseña debe tener la menos 9 caracteres')
    .isAlphanumeric().withMessage('La contraseña debe contener letras y un número'),
    check('repassword')
    .custom((value, { req } ) => value === req.body.password).withMessage('Las contraseñas ingrsadas no coinciden')
];

const loginValidation = [
    check('email')
        .isEmail().withMessage('El correo ingresado no es válido')
        .trim().not().isEmpty().withMessage('Este es un campo obligatorio')
        .custom(async value =>{
            let user_exists = await authModel.userExists({user_email: value});
            if(user_exists == ""){
                throw new Error('Las credenciales ingresadas no son correctas');
            }}),
        check('password')
        .custom(async (value, { req }) => {
            const passwordHash = await bcrypt.hash(value, 8);
            const user_pass = await authModel.getPassword({user_email : req.body.email });
            if(user_pass[0].user_password != passwordHash){
                throw new Error('Las credenciales ingresadas no son correctas') ;
            }
        })
];

const authControllers = require('../controllers/authControllers');

router.get("/login",authControllers.login);
router.post("/login", loginValidation, validator.validateLogin, authControllers.login_post);
router.get("/register", authControllers.register);
router.post("/register", registerValidation, validator.validateInput, authControllers.register_post);

module.exports = router;