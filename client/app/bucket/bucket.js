'use strict';

angular.module('bucketListApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('buckets', {
        url: '/',
        templateUrl: 'app/bucket/bucket.html',
        controller: 'BucketCtrl',
        resolve: {
          buckets: ['Bucket', function (Bucket){
            return Bucket.get();
          }]
        }
      })
      /*.state('add-bucket', {
        url: '/',
        templateUrl: 'app/bucket/bucket.html',
        controller: 'BucketCtrl'
      })*/;
  });