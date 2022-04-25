const mongoose = require('mongoose')
const cosSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true,
        lowercase: true
    },
    name: {
        type: String, 
        required: true
    }
},
{collection: 'COS'})

const model = mongoose.model('cosSchema', cosSchema)
module.exports = model
