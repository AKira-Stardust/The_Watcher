const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dramaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    episodes: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

const Drama = mongoose.model("dramas", dramaSchema);
module.exports = Drama;