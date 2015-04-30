'use strict';

angular.module('bucketListApp')
    .controller('BucketsCtrl', ['$scope', '$state', '$http', 'postman', 'buckets', 'Bucket', function ($scope, $state, $http, postman, buckets, Bucket){
        $scope.buckets = buckets.data;

        $scope.addBucket = function (bucket){
            $http.post('/api/bucket/', bucket)
                .success(function (newBucket){
                    $scope.buckets.push(newBucket);
                    $state.go('buckets');
                    postman.success('New Bucket', 'You added a new Bucket');
                })
                .error(function (err){
                    postman.error('Error', err);
                });
        };
    }]);