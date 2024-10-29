const Location = require('../models/Location');

const getLocations = async () => {
    return await Location.find();
};

const createLocation = async (data) => {
    const location = new Location(data);
    return await location.save();
};

module.exports = {
    getLocations,
    createLocation
};
