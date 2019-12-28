const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Branch
let Branch = new Schema({
    Branch_name: {
    type: String
  },
  Branch_id: {
    type: String
  },
  Branch_code: {
    type: String
  },
  Address: {
    type: String
  }

},{
    collection: 'branch'
});

module.exports = mongoose.model('Branch', Branch);