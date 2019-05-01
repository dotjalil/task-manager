const express = require('express')

const router = express.Router()

router.get('/user', (req, res) => {
    res.send('get.user - get user profile')
})

module.exports = router