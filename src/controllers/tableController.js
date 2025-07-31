const Table = require('../models/Table');

exports.getAllTables = async (req, res) => {
    const tables = await Table.find();
    res.json(tables);
};

exports.createTable = async (req, res) => {
    const table = new Table(req.body);
    await table.save();
    res.status(201).json(table);
};

exports.updateAvailability = async (req, res) => {
    const table = await Table.findByIdAndUpdate(req.params.id, { isAvailable: req.body.isAvailable }, { new: true });
    res.json(table);
};

exports.deleteTable = async (req, res) => {
    await Table.findByIdAndDelete(req.params.id);
    res.status(204).end();
};