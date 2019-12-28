// Designation.route.js

const express = require('express');
const designationRoutes = express.Router();

// Require Designation model in our routes module
let Designation = require('./designation.model');

// Defined store route
designationRoutes.route('/add').post(function (req, res) {
  let designation = new Designation(req.body);
  designation.save()
    .then(designation => {
      res.status(200).json({'designation': 'Designation in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
designationRoutes.route('/').get(function (req, res) {
  Designation.find(function(err, designationes){
    if(err){
      console.log(err);
    }
    else {
      res.json(designationes);
    }
  });
});

// Defined edit route
designationRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Designation.findById(id, function (err, designation){
      res.json(designation);
  });
});


//  Defined update route
designationRoutes.route('/update/:id').post(function (req, res) {
  Designation.findById(req.params.id, function(err, designation) {
    if (!designation)
      res.status(404).send("data is not found");
    else {
        designation.Designation_name = req.body.Designation_name;
        designation.Designation_id = req.body.Designation_id;
        designation.Address = req.body.Address;
        



        designation.save().then(designation => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
designationRoutes.route('/delete/:id').get(function (req, res) {
  Designation.findByIdAndRemove({_id: req.params.id}, function(err, designation){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = designationRoutes;
