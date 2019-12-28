const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
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
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);