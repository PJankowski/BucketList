'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BucketSchema = new Schema({
  name: String,
  description: String,
  items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

module.exports = mongoose.model('Bucket',  BucketSchema);