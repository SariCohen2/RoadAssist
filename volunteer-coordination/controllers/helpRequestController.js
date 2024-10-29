const helpRequestService = require('../services/helpRequestService');

const getHelpRequests = async (req, res) => {
    const filters = {};
    if (req.query.location) filters.location_id = req.query.location;
    if (req.query.status) filters.status = req.query.status;
    if (req.query.priority) filters.priority_id = req.query.priority;

    const helpRequests = await helpRequestService.getHelpRequests(filters);
    res.json(helpRequests);
};

const createHelpRequest = async (req, res) => {
    const helpRequest = await helpRequestService.createHelpRequest(req.body);
    res.json(helpRequest);
};

const updateHelpRequestStatus = async (req, res) => {
    const { id, status, volunteerId } = req.body;
    const updatedHelpRequest = await helpRequestService.updateHelpRequestStatus(id, status, volunteerId);
    res.json(updatedHelpRequest);
};

module.exports = {
    getHelpRequests,
    createHelpRequest,
    updateHelpRequestStatus
};
