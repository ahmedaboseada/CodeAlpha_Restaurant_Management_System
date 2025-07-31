const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: Number,
    unit: String,
    lowStockThreshold: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
