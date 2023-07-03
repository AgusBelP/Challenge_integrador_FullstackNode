const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers')

router.get("/admin", adminController.admin);
router.get("/create", adminController.create);
router.get("/edit", adminController.edit);
router.get("/login", adminController.login);
router.get("/register", adminController.register);

module.exports = router;