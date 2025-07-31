const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    phone: String,
    table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
    time: { type: Date, required: true },
    status: { type: String, enum: ['booked', 'cancelled', 'completed'], default: 'booked' }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
