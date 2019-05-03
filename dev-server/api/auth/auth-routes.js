const express = require('express')
const controller = require('./auth-controller')

const router = express.Router()

router.post('/auth', controller.index)

module.exports = router