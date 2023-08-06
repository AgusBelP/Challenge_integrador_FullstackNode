const express = require('express');
const router = express.Router();
const { uploadFile } = require('../middlewares/uploadFile');
const { isUserLogged } = require('../middlewares/authLoggued');


const adminController = require('../controllers/adminControllers');


router.use(isUserLogged)

router.get("/admin", adminController.admin);
router.get("/create", adminController.create);
router.post("/create", uploadFile.fields([{name: "imagen_principal", max:1},{name: "imagen_dorso", max:1}]), adminController.create_post);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id", adminController.edit_put);
router.delete("/delete/:id", adminController.delete_id);

module.exports = router;