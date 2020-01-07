const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Payhead
let Payhead = new Schema({
    Employee_name: {
    type: String
  },
  Employee_code: {
    type: String
  },
  Salary: {
    type: Number
  },
  
  
  Address: {
    type: String
  }

},{
    collection: 'payhead'
});

module.exports = mongoose.model('Payhead', Payhead);