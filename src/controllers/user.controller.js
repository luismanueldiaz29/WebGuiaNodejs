const user = require('../models/user');

exports.post = (req, res) => {
    user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
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
