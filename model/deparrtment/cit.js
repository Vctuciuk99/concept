const mongoose = require('mongoose')
const citSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        lowecase: true
    },
    name: {
        type: String, 
        required: true
    }
},
{collection: 'CIT'})

const model = mongoose.model('citSchema', citSchema)
module.exports = model
