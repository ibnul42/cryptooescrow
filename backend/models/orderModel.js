const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    id:{
        type: String,
        required: [true, 'Please enter a id']
    },
    message:{
        type: String,
        required: [true, 'Please enter a email']
    }    
}, {
    timestams: true
})

module.exports = mongoose.model('Order', orderSchema)