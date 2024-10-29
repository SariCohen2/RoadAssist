const Priority = require('../models/Priority');

const getPriorities = async () => {
    return await Priority.find();
};

const createPriority = async (data) => {
    const priority = new Priority(data);
    return await priority.save();
};

module.exports = {
    getPriorities,
    createPriority
};
