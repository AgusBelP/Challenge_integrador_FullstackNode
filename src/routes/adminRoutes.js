const express = require('express');
const router = express.Router();
const { uploadFile } = require('../middlewares/uploadFile');
const { isUserLogged } = require('../middlewares/authLoggued');

const adminController = require('../controllers/adminControllers');

router.get("/admin",  isUserLogged ,adminController.admin);
router.get("/create", isUserLogged, adminController.create);
router.post("/create", uploadFile.fields([{name: "imagen_principal", max:1},{name: "imagen_dorso", max:1}]), isUserLogged, adminController.create_post);
router.get("/edit/:id", isUserLogged, adminController.edit);
router.put("/edit/:id", isUserLogged, adminController.edit_put);
router.delete("/delete/:id", isUserLogged, adminController.delete_id);

module.exports = router;