var mongoose = require("mongoose");
var User = require("../models/user");
var Admin = require("../models/admin");
var Local = require("../models/local");
var authController = require("../controllers/authController");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../jwt_secret/config");

var adminController = {};

//Criar User
adminController.create = function (req, res) {
    authController.create(req, res);
}

//Criar Admin
adminController.createAdmin = function (req, res) {
    var admin = new Admin(req.body);
    admin.password = bcrypt.hashSync(req.body.password, 8);

    //Find Admin by Email
    Admin.findOne({ email: req.body.email }).exec((err, dbAdmin) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        } else {
            if (dbAdmin === null) {
                if (req.body.permission == 1) {
                    admin.save((err) => {
                        if (err) {
                            return res.status(500).send('Error on the server.');
                        } else {
                            res.json(req.body);
                        }
                    })
                }
            } else {
                console.log("Admin Already Exist");
                res.json({});
            }
        }
    })
}

//Mostrar todos os Useres
adminController.showUsers = function (req, res) {
    User.find({}).exec((err, dbUsers) => {
        if (err) {
            next(err);
        } else {
            res.json(dbUsers);
        }
    })
}

//Mostrar User por ID
adminController.showUser = function (req, res) {
    User.findOne({ _id: req.params.id }).exec((err, dbUsers) => {
        if (err) {
            next(err);
        } else {
            res.json(dbUsers);
        }
    })
}

//Delete User
adminController.deleteUser = function (req, res) {
    User.remove({ _id: req.params.id }).exec((err, rmUser) => {
        if (err) {
            next(err);
        } else {
            Local.remove({ idUser: req.params.id }).exec((err, dbLocal) => {
                if (err) {
                    next(err)
                }
            })
        }
        res.json(rmUser)
    })
}

//Admin Profile
adminController.profile = function (req, res) {
    Admin.findOne({ _id: req.adminId }).exec((err, dbAdmin) => {
        if (err) {
            next(err);
        } else {
            res.json(dbAdmin);
        }
    })
}

//Mostrar todos os Admins
adminController.showAdmins = function (req, res) {
    Admin.find({}).exec((err, dbAdmin) => {
        if (err) {
            next(err);
        } else {
            res.json(dbAdmin);
        }
    })
}

//Edit Admin Profile
adminController.editProfile = function (req, res) {
    Admin.findOne({ _id: req.adminId }).exec((err, tmp) => {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 8)
            Admin.findByIdAndUpdate(req.adminId, req.body, (err, editedAdmin) => {
                if (err) {
                    next(err);
                } else {
                    res.json(editedAdmin);
                }
            })
        }
    })
}

//Mostrar User por ID
adminController.showAdmin = function (req, res) {
    Admin.findOne({ _id: req.params.id }).exec((err, dbAdmin) => {
        if (err) {
            next(err);
        } else {
            res.json(dbAdmin);
        }
    })
}

//Delete Admin
adminController.deleteAdmin = function (req, res) {
    Admin.remove({ _id: req.params.id }).exec((err, rmAdmin) => {
        res.json(rmAdmin)
    })
}

//Remove Locals
adminController.removeAdminLocal = function (req, res) {
    Local.findOne({ _id: req.params.id }).exec((err, dbLocal) => {
        if (err) {
            next(err);
        } else {
            if (dbLocal) {
                    Local.remove({ _id: req.params.id }).exec((err, removeLocal) => {
                        if (err) {
                            next(err);
                        } else {
                            res.json(removeLocal);
                        }
                    });
            } else {
                res.status(500).send({ message: "Internal Error" });
            }
        }
    })
}
module.exports = adminController;