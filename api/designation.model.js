const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Designation
let Designation = new Schema({
    Designation_name: {
    type: String
  },
  Designation_id: {
    type: String
  },
  Address: {
    type: String
  }

},{
    collection: 'designation'
});

module.exports = mongoose.model('Designation', Designation);