const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminControllers');


router.get("/login", adminController.login);
router.post("/login", adminController.login_post);
router.get("/register", adminController.register);
router.post("/register", adminController.register_post);

module.exports = router;