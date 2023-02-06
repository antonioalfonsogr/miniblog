var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/User");
var db = mongoose.connection;

// GET del listado de usuarios
router.get("/", function (req, res, next) {
  User.find()
    .sort("-creationdate")
    .exec(function (err, users) {
      if (err) res.status(500).send(err);
      else res.status(200).json(users);
    });
});

// GET de un usuario por su id
router.get("/:id", function (req, res, next) {
  User.findById(req.params.id, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.status(200).json(userinfo);
  });
});

// POST de un nuevo usuario
router.post("/", function (req, res, next) {
  User.create(req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

// PUT de un usuario por su Id
router.put("/:id", function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

// DELETE de un usuario por su Id
router.delete("/:id", function (req, res, next) {
  User.findByIdAndDelete(req.params.id, function (err, userinfo) {
    if (err) res.status(500).send(err);
    else res.sendStatus(200);
  });
});

module.exports = router;
