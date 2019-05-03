const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    body: String,
    dueDate: { type: Date, defaul: Date.now },
    completed: { type: Boolean, default: false },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

module.exports = mongoose.model('task', taskSchema)