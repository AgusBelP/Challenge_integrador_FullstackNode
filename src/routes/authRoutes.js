const express = require('express');
const router = express.Router();

const authController = require('../controllers/authControllers');


router.get("/login", authController.login);
router.post("/login", authController.login_post);
router.get("/register", authController.register);
router.post("/register", authController.register_post);

module.exports = router;