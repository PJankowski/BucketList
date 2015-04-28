/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Bucket = require('../api/bucket/bucket.model');


Bucket.find({}).remove(function() {
  Bucket.create({
    name: 'Test 1',
    description: 'This is a test description'
  },
  {
    name: 'Test 2',
    description: 'This is a test description'
  },
  {
    name: 'Test 3',
    description: 'This is a test description'
  });
});