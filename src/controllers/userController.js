const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });
    await user.save();
    res.status(201).json({ token: generateToken(user._id) });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ token: generateToken(user._id) });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};

exports.getMe = async (req, res) => {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
};
