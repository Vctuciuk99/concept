const mongoose = require('mongoose')
const coeSchema = mongoose.Schema({
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
{collection: 'COE'})

const model = mongoose.model('coeSchema', coeSchema)
module.exports = model
