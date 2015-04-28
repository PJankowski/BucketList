/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Bucket = require('../api/bucket/bucket.model');


Bucket.find({}).remove(function() {
  Bucket.create({
    name: 'Test 1'
  },
  {
    name: 'Test 2'
  },
  {
    name: 'Test 3'
  });
});