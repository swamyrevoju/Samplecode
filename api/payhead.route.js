// Payhead.route.js

const express = require('express');
const payheadRoutes = express.Router();

// Require Payhead model in our routes module
let Payhead = require('./payhead.model');

// Defined store route
payheadRoutes.route('/add').post(function (req, res) {
  let payhead = new Payhead(req.body);
  payhead.save()
    .then(payhead => {
      res.status(200).json({'payhead': 'Payhead in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
payheadRoutes.route('/').get(function (req, res) {
  Payhead.find(function(err, payheades){
    if(err){
      console.log(err);
    }
    else {
      res.json(payheades);
    }
  });
});

// Defined edit route
payheadRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Payhead.findById(id, function (err, payhead){
      res.json(payhead);
  });
});


//  Defined update route
payheadRoutes.route('/update/:id').post(function (req, res) {
  Payhead.findById(req.params.id, function(err, payhead) {
    if (!payhead)
      res.status(404).send("data is not found");
    else {
        payhead.Employee_name = req.body.Employee_name;
        payhead.Employee_code = req.body.Employee_code;
        payhead.Salary = req.body.Salary;
        payhead.Address = req.body.Address;
        



        payhead.save().then(payhead => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
payheadRoutes.route('/delete/:id').get(function (req, res) {
  Payhead.findByIdAndRemove({_id: req.params.id}, function(err, payhead){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = payheadRoutes;
