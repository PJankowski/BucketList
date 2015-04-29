'use strict';

angular.module('bucketListApp')
    .controller('BucketsCtrl', ['$scope', '$state', 'postman', 'buckets', 'Bucket', function ($scope, $state, postman, buckets, Bucket){
        $scope.buckets = buckets.data;

        $scope.addBucket = function (bucket){
            Bucket.create(bucket);
            $scope.buckets.push(bucket);
            $state.go('buckets');
            postman.success('New Bucket', 'You added a new Bucket');
        };
    }]);