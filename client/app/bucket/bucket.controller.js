'use strict';

angular.module('bucketListApp')
    .controller('BucketCtrl', ['$scope', '$http', 'buckets', function ($scope, $http, buckets){
        $scope.buckets = buckets.data;
    }]);