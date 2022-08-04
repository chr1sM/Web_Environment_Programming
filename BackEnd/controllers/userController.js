var mongoose = require("mongoose");
var User = require("../models/user");
var authController = require("../controllers/authController");
const jwt = require("jsonwebtoken");
const config = require("../jwt_secret/config");
var bcrypt = require("bcrypt");
var localController = require("../controllers/localController");


var userController = {};

//User Profile
userController.profile = function (req, res) {
    User.findOne({ _id: req.userId }).exec((err, dbUser) => {
        if (err) {
            next(err);
        } else {
            res.json(dbUser);
        }
    })
}

//Edit User Profile
userController.editProfile = function (req, res) {
    User.findOne({ _id: req.userId }).exec((err, tmp) => {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 8)
            User.findByIdAndUpdate(req.userId, req.body, (err, editedUser) => {
                if (err) {
                    next(err);
                } else {
                    res.json(editedUser);
                }
            })
        }
    })
}

//Criar Local
userController.createLocal = function (req, res) {
    localController.create(req, res);
}

//Edit Local
userController.editLocal = function (req, res) {
        localController.editLocal(req, res)
    }

//Remove Local
userController.removeLocal = function (req, res) {
    localController.removeLocal(req, res)
}

//Show My Locals
userController.showMyLocal = function (req, res) {
    localController.showMyLocal(req, res)
}

//Show All Locals
userController.showAllLocals = function (req, res) {
    localController.showLocals(req, res)
}

//Show Local
userController.showLocal = function (req, res) {
    localController.showLocal(req, res)
}

module.exports = userController;