const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    _id:Number,
    name: { type: String, required: true },
    __v:{type:Number,require:false}
});

module.exports = mongoose.model('Location', LocationSchema);
