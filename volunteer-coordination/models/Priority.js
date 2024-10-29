const mongoose = require('mongoose');

const PrioritySchema = new mongoose.Schema({
    _id:Number,
    priorityName: { type: String, enum: ['low', 'medium', 'high', 'critical'], required: true },
    __v:{type:Number,require:false}
});

module.exports = mongoose.model('Priority', PrioritySchema);
