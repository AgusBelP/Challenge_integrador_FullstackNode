const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const loginValidation = [
    body('email')
    .isEmail()
    .withMessage('Necesito que ingreses un correo válido')
    .trim().not().isEmpty()
    .withMessage('Este es un campo obligatorio'),
    /* FALTARÍA VERIFICAR QUE EL EMAIL INGRESADO EN EL LOGIN NO ESTÁ YA EN USO AL REGISTRARSE*/
    body('password')
    .isLength({ min:6 })
    .isAlphanumeric()
    .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y un número')
];

const authController = require('../controllers/authControllers');

router.get("/login",authController.login);
router.post("/login", loginValidation , validateInput, authController.login_post);
router.get("/register", authController.register);
router.post("/register", authController.register_post);

module.exports = router;