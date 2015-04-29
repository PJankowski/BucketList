'use strict';

angular.module('bucketListApp')
    .controller('BucketCtrl', ['$scope', '$state', '$stateParams', 'postman', 'bucket', 'Bucket', function ($scope, $state, $stateParams, postman, bucket, Bucket){

        $scope.bucket = bucket.data;

        $scope.remove = function (id){
            Bucket.delete(id);
            $state.go('buckets');
            postman.error('Bucket Deleted', 'You have deleted a Bucket');
        };

        $scope.addItem = function (item){
            item.bucket = $stateParams.id;
            Bucket.addItem(item, $stateParams.id)
                .then(function(item){
                    $scope.bucket.items.push(item.data);
                    $scope.newThing.name = '';
                    $scope.newThing.description = '';
                    $scope.newThing.date = '';
                    postman.success('New Item', 'You added a new item');
                });
        };

        $scope.removeItem = function (id, index){
            Bucket.removeItem(id);
            $scope.bucket.items.splice(index, 1);
            postman.error('Item Deleted', 'You removed an Item');
        };
    }]);