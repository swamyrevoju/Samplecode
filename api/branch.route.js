// Branch.route.js

const express = require('express');
const branchRoutes = express.Router();

// Require Branch model in our routes module
let Branch = require('./branch.model');

// Defined store route
branchRoutes.route('/add').post(function (req, res) {
  let branch = new Branch(req.body);
  branch.save()
    .then(branch => {
      res.status(200).json({'branch': 'Branch in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
branchRoutes.route('/').get(function (req, res) {
  Branch.find(function(err, branches){
    if(err){
      console.log(err);
    }
    else {
      res.json(branches);
    }
  });
});

// Defined edit route
branchRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Branch.findById(id, function (err, branch){
      res.json(branch);
  });
});


//  Defined update route
branchRoutes.route('/update/:id').post(function (req, res) {
  Branch.findById(req.params.id, function(err, branch) {
    if (!branch)
      res.status(404).send("data is not found");
    else {
        branch.Branch_name = req.body.Branch_name;
        branch.Branch_id = req.body.Branch_id;
        branch.Branch_code = req.body.Branch_code;
        branch.Address = req.body.Address;
        



        branch.save().then(branch => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
branchRoutes.route('/delete/:id').get(function (req, res) {
  Branch.findByIdAndRemove({_id: req.params.id}, function(err, branch){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = branchRoutes;
