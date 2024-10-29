const express = require('express');
const router = express.Router();
const helpRequestController = require('../controllers/helpRequestController');

router.get('/', helpRequestController.getHelpRequests);
router.post('/', helpRequestController.createHelpRequest);
router.put('/status', helpRequestController.updateHelpRequestStatus);

module.exports = router;
