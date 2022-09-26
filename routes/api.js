const express = require("express");
const Med = require("../models/meds");
const router = express.Router();

/*
req = request
res = response
next = move to middleware
.catch = catch error
.then = move on after function returns something
*/

// get a list of meds
router.get("/meds", function (req, res, next) {
  console.log("request for all meds");
  Med.find()
    .then(function (meds) {
      res.send(meds);
      console.log("sent", meds.length, "meds");
    })
    .catch(next);
});

// get one med
router.get("/meds/:id", function (req, res, next) {
  Med.findOne({ _id: request.params.id })
    .then(function (meds) {
      res.send(meds);
    })
    .catch(next);
});

// add a new med
router.post("/meds", function (req, res, next) {
  Med.create(req.body)
    .then(function (med) {
      res.send(med);
    })
    .catch(next);
});

// update an existing med
router.put("/meds/:id", function (req, res, next) {
  Med.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Med.findOne({ _id: req.params.id }).then(function (med) {
      res.send(med);
    });
  });
});

// delete a med
router.delete("/meds/:id", function (req, res, next) {
  Med.findByIdAndRemove({ _id: req.params.id }).then(function (med) {
    res.send(med);
  });
});

module.exports = router;
