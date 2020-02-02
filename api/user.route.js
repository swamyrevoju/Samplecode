// Department.route.js

const express = require('express');
const userRoutes = express.Router();

// Require Departmentment model in our routes module
let User = require('./user.model');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);  
  user.save()
    .then(user => {
      res.status(200).json({'user': 'User in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function(err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      res.status(404).send("data is not found");
    else {
      res.json(user);
    }
  });
});


// Defined edit route
userRoutes.route('/edit').post(function (req, res) {
  let employeeCode = req.body.employeeCode;
  let password = req.body.password;
  console.log("employeeCode :"+employeeCode);
  console.log("password :"+password);

  User.find({employeeCode:employeeCode, password:password}, function (err, user){
    console.log("user:"+user);

      res.json(user);
  });
});


module.exports = userRoutes;
