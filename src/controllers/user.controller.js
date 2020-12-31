const user = require('../models/user');
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

exports.post = (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    user.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        role: req.body.role
    }).then(user => {
        res.status(200).json(user);
    }).catch(error => {
        res.status(400).json(error);
    });
}

exports.get = (req, res) => {
    user.findAll().then(users => {
        res.status(200).json(users);
    })
}
