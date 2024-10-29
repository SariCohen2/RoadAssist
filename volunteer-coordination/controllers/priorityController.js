const priorityService = require('../services/priorityService');

const getPriorities = async (req, res) => {
    const priorities = await priorityService.getPriorities();
    res.json(priorities);
};

const createPriority = async (req, res) => {
    const priority = await priorityService.createPriority(req.body);
    res.json(priority);
};

module.exports = {
    getPriorities,
    createPriority
};
