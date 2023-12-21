// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie:{
        type: {},
        required: [true, "please enter a value"],
    }
});

module.exports = mongoose.model('Movie', movieSchema);
