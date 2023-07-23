const express = require('express');
const router = express.Router();
const authModel = require('../model/authModel')
const validator = require('../middlewares/validator');
const { check, body } = require('express-validator');

const registerValidation = [
    check('email').isEmail().withMessage('Necesito que ingreses un correo válido'),
    check('email').trim().not().isEmpty().withMessage('Este es un campo obligatorio'),
    check('email')
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
]

const authControllers = require('../controllers/authControllers');

router.get("/login",authControllers.login);
router.post("/login", authControllers.login_post);
router.get("/register", authControllers.register);
router.post("/register", registerValidation, validator.validateInput, authControllers.register_post);

module.exports = router;