const express = require("express");
const app = express();
const tagRoutes = express.Router();

let Tag = require("../models/Tag");

tagRoutes.route("/add").post(function (req, res) {
  let tag = new Tag(req.body);
  tag
    .save()
    .then((tag) => {
      res.status(200).json({ Tag: "Tag has been added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

tagRoutes.route("/").get(function (req, res) {
  Tag.find(function (err, tags) {
    if (err) {
      console.log(err);
    } else {
      res.json(tags);
    }
  });
});

tagRoutes.route("/delete/:id").get(function (req, res) {
  Tag.findByIdAndRemove({ _id: req.params.id }, function (err, tag) {
    if (err) {
      res.json(err);
    } else res.json("Successfully removed");
  });
});

module.exports = tagRoutes;
