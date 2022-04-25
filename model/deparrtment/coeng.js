const mongoose = require('mongoose')
const coengSchema = mongoose.Schema({
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
{collection: 'COENG'})

const model = mongoose.model('coengSchema', coengSchema)
module.exports = model

