const mongoose = require('mongoose');

const motorcycleSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    displacement: {
        type: Number,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Motorcycle', motorcycleSchema);