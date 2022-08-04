var mongoose = require("mongoose");
var Admin = require("../models/admin");
var User = require("../models/user");
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../jwt_secret/config');

var authController = {};

//Logout
authController.logout = function (req, res) {
    res.status(200).send({ auth: false, token: null });
}

//Register
authController.create = function (req, res) {
    var user = new User(req.body);
    user.password = bcrypt.hashSync(req.body.password, 8);

    //Find user by Email
    User.findOne({ email: req.body.email }).exec((err, dbUsers) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        } else {
            if (dbUsers === null) {
                if (req.body.permission == 2) {
                    user.save((err) => {
                        if (err) {
                            return res.status(500).send('Error on the server.');
                        } else {
                            res.json(req.body);
                        }
                    })
                }
            } else {
                console.log("User Already Exist");
                res.json({});
            }
        }
    })
}

//Verify Admin
authController.verifyAdmin = function (req, res, next) {
    var token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({ auth: false, message: 'Token cannot be validated.' });
    }

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Internal Error' })
        }
        if (decoded.permission == 1) {
            req.adminId = decoded.id;
            next();
        } else {
            return res.status(203).send({ auth: false, message: 'Authentication Error' })
        }

    })
}

//Verify User
authController.verifyUser = function (req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send({ auth: false, message: 'Token cannot be validated.' });
    }

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Internal Error' })
        }
        if (decoded.permission == 2) {
            req.userId = decoded.id;
            next();
        } else {
            return res.status(203).send({ auth: false, message: 'Authentication Error' })
        }
    })
}

//Login
authController.findAccount = function (req, res, next) {
    Admin.findOne({ email: req.body.email }).exec((err, dbAdmin) => {
        if (err) {
            next(err);
        } else {
            if (dbAdmin != null && bcrypt.compareSync(req.body.password, dbAdmin.password)) {
                console.log("Welcome Admin")
                var token = jwt.sign({ id: dbAdmin._id, permission: dbAdmin.permission }, config.secret, {
                    expiresIn: 86400,
                });
                res.status(200).send({ auth: true, token: token, permission: 1 });
            } else {
                User.findOne({ email: req.body.email }).exec((err, dbUsers) => {
                    if (err) {
                        next(err);
                    } else {
                        if (dbUsers != null && bcrypt.compareSync(req.body.password, dbUsers.password)) {
                            console.log("Welcome User")
                            var token = jwt.sign({ id: dbUsers._id, permission: dbUsers.permission }, config.secret, {
                                expiresIn: 86400,
                            });
                            res.status(200).send({ auth: true, token: token, permission: 2 });
                        } else {
                            return res.status(404).send('No User found');
                        }
                    }
                })
            }
        }
    })
}

module.exports = authController;