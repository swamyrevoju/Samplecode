const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const employeeRoute = require('./employee.route');
const organizationRoute = require('./organization.route');
const designationRoute = require('./designation.route');
const branchRoute = require('./branch.route');
const departmentRoute = require('./department.route');



mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/employee', employeeRoute);
app.use('/organization', organizationRoute);
app.use('/designation', designationRoute);
app.use('/department', departmentRoute);
app.use('/branch', branchRoute);



app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
