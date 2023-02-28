const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Food', foodSchema);
