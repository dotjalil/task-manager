const express = require('express')
const controller = require('./register.controller')

const router = express.Router()

router.post('/register', controller.index)

module.exports = router