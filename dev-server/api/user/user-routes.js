const express = require('express')
const userController = require('./user-controller')

const router = express.Router()

router.get('/user', userController.index)

module.exports = router