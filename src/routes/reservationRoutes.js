const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.getAllReservations);
router.post('/', reservationController.createReservation);
router.get('/:id', reservationController.getReservation);
router.put('/:id', reservationController.updateReservation);
router.delete('/:id', reservationController.cancelReservation);

module.exports = router;