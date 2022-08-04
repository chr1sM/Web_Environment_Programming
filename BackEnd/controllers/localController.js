var mongoose = require("mongoose");
var Local = require("../models/local");

var localController = {};

//Create Local
localController.create = function (req, res) {
    var local = new Local(req.body);
    local.user_id = req.userId;
    //Find Local by Name
    Local.findOne({ name: req.body.name }).exec((err, dbLocal) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        } else {
            if (dbLocal === null) {
                local.save((err) => {
                    if (err) {
                        return res.status(500).send('Error on the server.');
                    } else {
                        res.json(req.body);
                    }
                })
            } else {
                console.log("Local Already Exist");
                res.json({});
            }
        }
    })
}

//Show All Locals
localController.showLocals = function (req, res) {
    Local.find({}).exec((err, dbLocal) => {
        if (err) {
            next(err);
        } else {
            res.json(dbLocal);
        }
    })
}

//Show Local by Name
localController.showLocal = function (req, res) {
    Local.findOne({ _id: req.params.id }).exec((err, dbLocal) => {
        console.log(dbLocal);
        if (err) {
            next(err);
        } else {
            res.json(dbLocal);
        }
    })
}

//Show My Locals
localController.showMyLocal = function (req, res) {
    Local.find({ user_id: req.userId }).exec((err, dbLocal) => {
        if (err) {
            next(err);
        } else {
            res.json(dbLocal);
        }
    });
}

//Edit Local
localController.editLocal = function (req, res) {
    Local.findOne({ _id: req.params.id }).exec((err, dbLocal) => {
        if (err) {
            res.status(500).send({ message: "Internal Error" });
        } else {
            if (dbLocal) {
                if (dbLocal.user_id == req.userId) {
                    Local.findByIdAndUpdate(
                        req.params.id,
                        req.body,
                        (err, editLocal) => {
                            if (err) {
                                next(err);
                            } else {
                                res.json(editLocal);
                            }
                        }
                    );
                } else {
                    res
                        .status(203)
                        .send({ message: "Not authorized to edit this Local!" })
                }
            } else {
                res.status(404).send({ message: "Not found" })
            }
        }
    })
}

//Remove Local
localController.removeLocal = function (req, res) {
    Local.findOne({ _id: req.params.id }).exec((err, dbLocal) => {
        if (err) {
            next(err);
        } else {
            if (dbLocal) {
                if (dbLocal.user_id == req.userId) {
                    Local.remove({ _id: req.params.id }).exec((err, removeLocal) => {
                        if (err) {
                            next(err);
                        } else {
                            res.json(removeLocal);
                        }
                    });
                } else {
                    res
                        .status(203)
                        .send({ message: "Not authorized to delete this Local!" });
                }
            } else {
                res.status(500).send({ message: "Internal Error" });
            }
        }
    })
}
module.exports = localController;