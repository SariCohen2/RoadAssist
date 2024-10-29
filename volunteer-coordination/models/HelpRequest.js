const mongoose = require('mongoose');

const HelpRequestSchema = new mongoose.Schema({
    _id:Number,
    location_id: { type: Number, ref: 'Location', required: true },
    problemDescription: { type: String, required: true },
    contactPhoneNumber: { type: String, required: true },
    status: { type: String, enum: ['waiting', 'processing', 'finished'], default: 'waiting' },
    numberOfPeopleStuck: { type: Number, required: true },
    priority_id: { type: Number, ref: 'Priority', required: true },
    volunteer_id: { type: Number, ref: 'Priority', required: true },
    __v:{type:Number,require:false}
});

module.exports = mongoose.model('HelpRequest', HelpRequestSchema);
