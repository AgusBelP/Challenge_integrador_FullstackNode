const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers')

router.get("/shop", shopControllers.shop )
router.get("/item", shopControllers.item)

module.exports = router;