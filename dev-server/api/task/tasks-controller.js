const User = require('../../models/user-model')
const Task = require('../../models/task-model')
const moment = require('moment')
const auth = require('../../services/auth-service')

module.exports.index = function(req, res) {
    // find all tasks
    Task.find({}, (error, tasks) => {
        if (error) {
            return res.status(500).json()
        }
        return res.status(200).json({ tasks: tasks })
    }).populate('author', 'username', 'user')
}

module.exports.create = function(req, res) {
    // create task
    const id = auth.getUserId(req)
    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            return res.status(500).json()
        }
        const task = new Task(req.body.task)
        task.author = user._id
        task.dueDate = moment(task.dueDate)

        task.save(error => {
            if (error) {
                return res.status(500).son()
            }
            return res.status(201).json()
        })
    })
}

module.exports.update = function(req, res) {
    // update task
    const id = auth.getUserId(req)
    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json()
        }
        if (!user) {
            return res.status(404).json()
        }

        const task = new Task(req.body.task)
        task.author = user._id
        task.dueDate = moment(task.dueDate)
        Task.findByIdAndUpdate({ _id: task._id }, task, error => {
            if (error) {
                return res.status(500).json()
            }
            return res.status(204).json()
        })
    })
}

module.exports.remove = function(req, res) {
    // remove task
    const id = auth.getUserId(req)
    Task.findOne({ _id: req.params.id }, (error, task) => {
        if (error) {
            return res.status(500).json()
        }
        if (!task) {
            return res.status(404).json()
        }
        if (task.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s post'})
        }
        Task.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json()
            }
            return res.status(204).json()
        })
    })
}

module.exports.show = function(req, res) {
    // get task by id
    Task.findOne({ _id: req.params.id }, (error, task) => {
        if (error) {
            return res.status(500).json()
        }
        if (!task) {
            return res.status(404).json()
        }
        return res.status(200).json({ task: task })
    })
}