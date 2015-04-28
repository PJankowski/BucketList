'use strict';

angular.module('bucketListApp')
    .controller('BucketsCtrl', ['$scope', '$http', '$state', '$location', 'buckets', 'Bucket', function ($scope, $http, $state, $location, buckets, Bucket){
        $scope.buckets = buckets.data;

        $scope.addBucket = function (bucket){
            Bucket.create(bucket);
            $scope.buckets.push(bucket);
            $state.go('buckets');
        };
    }]);