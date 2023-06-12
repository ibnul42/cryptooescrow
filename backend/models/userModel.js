const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Please enter a type']
    },
    email:{
        type: String,
        required: [true, 'Please enter a email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please enter a password']
    },    
}, {
    timestams: true
})

module.exports = mongoose.model('User', userSchema)