// Roteador do servidor API
var express = require('express');
var router = express.Router();
const User = require('../controllers/userController')
const Restaurante = require('../controllers/restauranteController')


// -------------------------- User ------------------------------
// GET em user
router.get("/user", User.findAll)

// POST em user
router.post("/user", User.create)

// -------------------------- Restaurante ------------------------------
// GET em restaurante
router.get("/restaurante", Restaurante.findAll)

// POST em user
router.post("/restaurante", Restaurante.create)

module.exports = router;