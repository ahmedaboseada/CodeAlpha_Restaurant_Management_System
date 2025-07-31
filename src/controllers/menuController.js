const MenuItem = require('../models/MenuItem');

exports.getAllMenuItems = async (req, res) => {
    const items = await MenuItem.find();
    res.json(items);
};

exports.createMenuItem = async (req, res) => {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
};

exports.getMenuItem = async (req, res) => {
    const item = await MenuItem.findById(req.params.id);
    res.json(item);
};

exports.updateMenuItem = async (req, res) => {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
};

exports.deleteMenuItem = async (req, res) => {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(204).end();
};
