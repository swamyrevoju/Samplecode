const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Employee
let Employee = new Schema({
  Employee_name: {
    type: String
  },
  Employee_id: {
    type: String
  },
  Email_id: {
    type: String
  },
  Phone_number: {
    type: Number
  },
  Address: {
    type: String
  },
  Designation: {
    type: String
  },
  joiningDate:{
    type: String
  }

},{
    collection: 'employee'
});

module.exports = mongoose.model('Employee', Employee);