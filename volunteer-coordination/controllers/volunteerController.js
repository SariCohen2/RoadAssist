const volunteerService = require('../services/volunteerService');

const createVolunteer = async (req, res) => {
    try {
        const volunteer = await volunteerService.createVolunteer(req.body);
        res.status(201).json(volunteer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const getAll = async (req, res) => {
    try {
        const volunteers = await volunteerService.getAll();
        res.json(volunteers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getById = async (req, res) => {
    try {
        console.log(req.params.id);
        const volunteer = await volunteerService.getVolunteerById({ _id: req.params.id });
        if (!volunteer)
            res.status(404).json({ message: "Volunteer not found" });
        res.json(volunteer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    createVolunteer,
    getAll,
    getById
};
