const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.post('/', volunteerController.createVolunteer);
router.get('/:id',volunteerController.getById)

module.exports = router;
