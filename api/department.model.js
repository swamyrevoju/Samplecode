const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Department
let Department = new Schema({
    Department_name: {
    type: String
  },
  Department_id: {
    type: String
  },
  Department_code: {
    type: String
  }

},{
    collection: 'department'
});

module.exports = mongoose.model('Department', Department);