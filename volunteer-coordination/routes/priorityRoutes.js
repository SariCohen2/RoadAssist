const express = require('express');
const router = express.Router();
const priorityController = require('../controllers/priorityController');

router.get('/', priorityController.getPriorities);
router.post('/', priorityController.createPriority);

module.exports = router;
