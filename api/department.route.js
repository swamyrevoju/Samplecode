// Department.route.js

const express = require('express');
const departmentRoutes = express.Router();

// Require Departmentment model in our routes module
let Department = require('./department.model');

// Defined store route
departmentRoutes.route('/add').post(function (req, res) {
  let department = new Department(req.body);
  department.save()
    .then(department => {
      res.status(200).json({'department': 'Department in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
departmentRoutes.route('/').get(function (req, res) {
  Department.find(function(err, departmentes){
    if(err){
      console.log(err);
    }
    else {
      res.json(departmentes);
    }
  });
});

// Defined edit route
departmentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Department.findById(id, function (err, department){
      res.json(department);
  });
});


//  Defined update route
departmentRoutes.route('/update/:id').post(function (req, res) {
  Department.findById(req.params.id, function(err, department) {
    if (!department)
      res.status(404).send("data is not found");
    else {
        department.Department_name = req.body.Department_name;
        department.Department_id = req.body.Department_id;
        department.Department_code = req.body.Department_code;
        



        department.save().then(department => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | departmenttroy route
departmentRoutes.route('/delete/:id').get(function (req, res) {
  Department.findByIdAndRemove({_id: req.params.id}, function(err, department){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = departmentRoutes;
