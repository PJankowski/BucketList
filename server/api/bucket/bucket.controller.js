/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Bucket = require('./bucket.model');
var Item = require('./item.model');

// Get list of things
exports.index = function(req, res) {
  Bucket.find(function (err, buckets) {
    if(err) { return handleError(res, err); }
    return res.json(200, buckets);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Bucket.findOne({_id: req.params.id}).populate('items').exec(function (err, bucket) {
    if(err) { return handleError(res, err); }
    if(!bucket) { return res.send(404); }
    return res.json(bucket);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Bucket.create(req.body, function(err, bucket) {
    if(err) { return handleError(res, err); }
    return res.json(201, bucket);
  });
};

exports.createItem = function(req, res){

  console.log(req.body);

  //var item = new Item(req.body);

  Item.create(req.body, function(err, item){
    if(err) {return handleError(res, err);}

    Bucket.findById(req.params.id, function (err, bucket){
      if(err) {return handleError(res, err);}

      bucket.items.push(item);

      bucket.save(function(err, bucket){
        if(err) {return handleError(res, err);}

        res.json(200, item);
      });
    });
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bucket.findById(req.params.id, function (err, bucket) {
    if (err) { return handleError(res, err); }
    if(!bucket) { return res.send(404); }
    var updated = _.merge(bucket, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bucket);
    });
  });
};

exports.destroyItem = function(req, res){
  Item.findById(req.params.id, function (err, item){
    if(err) {return handleError(res, err);}
    if(!item) {return res.send(404);}
    item.remove(function(err){
      if(err){
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Bucket.findById(req.params.id, function (err, bucket) {
    if(err) { return handleError(res, err); }
    if(!bucket) { return res.send(404); }
    bucket.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}