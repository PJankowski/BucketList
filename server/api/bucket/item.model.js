'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  description: String,
  date: Date,
  bucket: {type: mongoose.Schema.Types.ObjectId, ref: 'Bucket'}
});

module.exports = mongoose.model('Item',  ItemSchema);