const Reservation = require('../models/Reservation');

exports.getAllReservations = async (req, res) => {
    const reservations = await Reservation.find().populate('table');
    res.json(reservations);
};

exports.createReservation = async (req, res) => {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
};

exports.getReservation = async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);
    res.json(reservation);
};

exports.updateReservation = async (req, res) => {
    const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.cancelReservation = async (req, res) => {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(204).end();
};