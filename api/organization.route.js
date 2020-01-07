// organization.route.js

const express = require('express');
const organizationRoutes = express.Router();

// Require Organizationanization model in our routes module
let Organization = require('./organization.model');

// Defined store route
organizationRoutes.route('/add').post(function (req, res) {
  let organization = new Organization(req.body);
  organization.save()
    .then(organization => {
      res.status(200).json({'organization': 'Organization in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
organizationRoutes.route('/').get(function (req, res) {
    Organization.find(function(err, organizationes){
    if(err){
      console.log(err);
    }
    else {
      res.json(organizationes);
    }
  });
});

// Defined edit route
organizationRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Organization.findById(id, function (err, organization){
      res.json(organization);
  });
});


//  Defined update route
organizationRoutes.route('/update/:id').post(function (req, res) {
    Organization.findById(req.params.id, function(err, organization) {
    if (!organization)
      res.status(404).send("data is not found");
    else {
        organization.Organization_name = req.body.Organization_name;
        organization.Organization_phone = req.body.Organization_phone;
        organization.Address = req.body.Address;
        



        organization.save().then(organization => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
organizationRoutes.route('/delete/:id').get(function (req, res) {
    Organization.findByIdAndRemove({_id: req.params.id}, function(err, organization){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = organizationRoutes;
