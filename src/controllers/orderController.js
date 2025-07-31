const Order = require('../models/Order');

exports.getAllOrders = async (req, res) => {
    const orders = await Order.find().populate('table items.menuItem');
    res.json(orders);
};

exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
};

exports.getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('items.menuItem');
    res.json(order);
};

exports.updateOrderStatus = async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(order);
};

exports.cancelOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).end();
};