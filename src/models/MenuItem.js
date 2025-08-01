const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: String,
    ingredients: [String]
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);