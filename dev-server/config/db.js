const mongoose = require('mongoose')

module.exports.connectToDB = function() {
    mongoose.connect('mongodb+srv://taskManagerJalil:qUVlC0nbpB5n4LBJ@cluster0-lprnq.mongodb.net/test?retryWrites=true', {useNewUrlParser: true}, error => {
        if (error) {
            console.log('Unable to connect to database')
            throw error
        } else {
            console.log('Connected to MongoDB')
        }
    })
}