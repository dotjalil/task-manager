const express = require('express')
const controller = require('./tasks-controller')

const router = express.Router()

router.post('/task', controller.create)
router.get('/task', controller.index)
router.get('/task/:id', controller.show)
router.put('/task', controller.update)
router.delete('/task', controller.remove)

module.exports = router