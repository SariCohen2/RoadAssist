const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    _id:Number,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    internshipTypes: [{ type: String }],
    __v:{type:Number,require:false}
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
