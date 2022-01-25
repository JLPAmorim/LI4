// Roteador do servidor API
var express = require('express');
var router = express.Router();
const User = require('../controllers/userController')
const Restaurante = require('../controllers/restauranteController')
const Visited = require('../controllers/visitedController')


// -------------------------- User ------------------------------
// GET em user
router.get("/user", User.findOne)

// POST em user
router.post("/user", User.create)

// POST em login
router.post("/login", User.findLogin)

// -------------------------- Restaurante ------------------------------
// GET em restaurante
router.get("/restaurante", Restaurante.findAll)

// POST em user
router.post("/restaurante", Restaurante.create)

// -------------------------- Visited ------------------------------
// GET em visited
router.get("/visited", Visited.findAll)

// GET em visited
router.post("/visited", Visited.create)


module.exports = router;