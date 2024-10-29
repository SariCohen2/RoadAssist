const Volunteer = require('../models/Volunteer');

const getNextVolunteerId = async () => {
    // Find the highest _id and increment it by 1
    const latestVolunteer = await Volunteer.findOne().sort({ _id: -1 });
    return latestVolunteer ? latestVolunteer._id + 1 : 1;
};


const getVolunteerById = async (id) => {
    return await Volunteer.findById(id);
};

const createVolunteer = async (data) => {
    // const volunteer = new Volunteer(data);
    // return await volunteer.save();
    const nextId = await getNextVolunteerId();
    const volunteer = new Volunteer({ _id: nextId, ...data });
    return await volunteer.save();
};

module.exports = {
    getVolunteerById,
    createVolunteer
};
