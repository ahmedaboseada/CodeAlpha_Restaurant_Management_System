const Inventory = require('../models/InventoryItem.js');

exports.getAllInventory = async (req, res) => {
    const items = await Inventory.find();
    res.json(items);
};

exports.addInventoryItem = async (req, res) => {
    const item = new Inventory(req.body);
    await item.save();
    res.status(201).json(item);
};

exports.updateInventoryItem = async (req, res) => {
    const item = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
};

exports.deleteInventoryItem = async (req, res) => {
    await Inventory.findByIdAndDelete(req.params.id);
    res.status(204).end();
};
