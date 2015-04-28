'use strict';

angular.module('bucketListApp')
    .factory('Bucket', ['$http', function ($http){

        var o = {
            buckets: []
        };

        o.get = function (){
            return $http.get('/api/bucket/')
                .success(function (buckets){
                    angular.copy(buckets, o.buckets);
                });
        };

        o.create = function (newBucket){
            $http.post('/api/bucket/', newBucket)
                .success(function (bucket){
                    o.buckets.push(bucket);
                    console.log(bucket);
                })
                .error(function (err){
                    console.log(err);
                });
        };

        o.show = function (id){
            return $http.get('/api/bucket/' + id)
                .success(function (bucket){
                    return bucket.data;
                })
                .error(function (err){
                    console.log(err);
                });
        };

        o.delete = function (id) {
            return $http.delete('/api/bucket/' + id);
        };

        return o;
    }]);