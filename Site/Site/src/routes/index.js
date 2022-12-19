const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const sobre = require('../controllers/sobre')
const contato = require('../controllers/contato')
const usuario = require('../controllers/usuario')


router.get('/', home.home)
router.get('/sobre', sobre.sobre)
router.get('/contato', contato.contato)
router.get('/usuario', usuario.usuario)

module.exports = router