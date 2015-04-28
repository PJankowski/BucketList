'use strict';

angular.module('bucketListApp')
    .controller('BucketCtrl', ['$scope', '$state', 'bucket', 'Bucket', function ($scope, $state, bucket, Bucket){
        $scope.bucket = bucket.data;

        $scope.remove = function (id){
            Bucket.delete(id);
            $state.go('buckets');
        };
    }]);