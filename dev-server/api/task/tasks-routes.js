const express = require('express')
const controller = require('./tasks-controller')
const auth = require('../../services/auth-service')

const router = express.Router()

router.post('/task', auth.requireLogin, controller.create)
router.get('/task', auth.requireLogin, controller.index)
router.get('/task/:id', auth.requireLogin, controller.show)
router.put('/task', auth.requireLogin, controller.update)
router.delete('/task', auth.requireLogin, controller.remove)

module.exports = router