const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Organization
let Organization = new Schema({
    Organization_name: {
    type: String
  },
  Organization_id: {
    type: String
  },
  Address: {
    type: String
  }

},{
    collection: 'organization'
});

module.exports = mongoose.model('Organization', Organization);