const taskRoutes = require('./api/task/tasks-routes')
const authRoutes = require('./api/auth/auth-routes')
const registerRoutes = require('./api/register/register-routes')
const userRoutes = require('./api/user/user-routes')


module.exports.registerRoutes = function(app) {
    app.use('/api', taskRoutes)
    app.use('/api', authRoutes)
    app.use('/api', registerRoutes)
    app.use('/api', userRoutes)
}
