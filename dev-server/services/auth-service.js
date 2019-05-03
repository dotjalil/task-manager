const jwt = require('jsonwebtoken')

module.exports.generateJWT = function(user) {
    const tokenData = { username: user.username, id: user._id }
    return jwt.sign({ user: tokenData }, 'secret-app-kik')
}

module.exports.requireLogin = function(req, res, next) {
    const token = decodeToken(req)
    if (!token) {
        return res.status(401).json({ message: 'You must be logged in' })
    }
    next()
}

const decodeToken = function(req) {
    const token = req.headers.authorization || req.headers['authorization']
    if (!token) {
        return null
    }

    try {
        return jwt.verify(token, 'secret-app-kik')
    } catch (error) {
        return null
    }
}

module.exports.getUsername = function(req) {
    const token = decodeToken(req)
    if (!token) {
        return null
    }
    return token.user.username
}

module.exports.getUserId = function(req) {
    const token = decodeToken(req)
    if (!token) {
        return null
    }
    return token.user.id
}