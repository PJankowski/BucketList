'use strict';

angular.module('bucketListApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buckets', {
        url: '/',
        templateUrl: 'app/bucket/bucket.html',
        controller: 'BucketsCtrl',
        resolve: {
          buckets: ['Bucket', function (Bucket){
            return Bucket.get();
          }]
        }
      })
      .state('buckets.add', {
        views: {
          "add-bucket": {
            templateUrl: 'app/bucket/add-bucket.html'
          }
        }
      })
      .state('bucket', {
        url: '/bucket/{id}',
        templateUrl: 'app/bucket/show.html',
        controller: 'BucketCtrl',
        resolve: {
          bucket: ['$stateParams', 'Bucket', function ($stateParams, Bucket){
            return Bucket.show($stateParams.id);
          }]
        }
      });
  });