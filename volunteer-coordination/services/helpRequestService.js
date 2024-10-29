const HelpRequest = require('../models/HelpRequest');

const getHelpRequests = async (filters = {}) => {
    return await HelpRequest.find(filters)
        .populate('location_id')
        .populate('priority_id')
        .populate('volunteer_id')
        .exec();
};

const getHelpRequestById = async (id) => {
    return await HelpRequest.findById(id)
        .populate('location_id')
        .populate('priority_id')
        .populate('volunteer_id')
        .exec();
};

const createHelpRequest = async (data) => {
    const helpRequest = new HelpRequest(data);
    return await helpRequest.save();
};

const updateHelpRequestStatus = async (id, status, volunteerId) => {
    return await HelpRequest.findByIdAndUpdate(
        id,
        { status, volunteer_id: volunteerId },
        { new: true }
    );
};

module.exports = {
    getHelpRequests,
    getHelpRequestById,
    createHelpRequest,
    updateHelpRequestStatus
};
