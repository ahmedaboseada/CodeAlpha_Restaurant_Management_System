const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

router.get('/', tableController.getAllTables);
router.post('/', tableController.createTable);
router.put('/:id/availability', tableController.updateAvailability);
router.delete('/:id', tableController.deleteTable);

module.exports = router;