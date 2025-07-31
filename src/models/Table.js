const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    number: { type: Number, required: true, unique: true },
    seats: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Table', tableSchema);