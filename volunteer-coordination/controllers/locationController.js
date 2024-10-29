const locationService = require('../services/locationService');

const getLocations = async (req, res) => {
    const locations = await locationService.getLocations();
    res.json(locations);
};

const createLocation = async (req, res) => {
    const location = await locationService.createLocation(req.body);
    res.json(location);
};

module.exports = {
    getLocations,
    createLocation
};
