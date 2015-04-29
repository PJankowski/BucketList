'use strict';

angular.module('bucketListApp')
    .factory('Bucket', ['$http', function ($http){

        var o = {
            buckets: [],
            items: []
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
                })
                .error(function (err){
                    console.log(err);
                });
        };

        o.addItem = function (newItem, id){
            return $http.post('/api/bucket/'+id+'/item/', newItem)
                .success(function (data){
                    o.items.push(data);
                })
                .error(function (err){
                    console.log(err);
                });
        };

        o.removeItem = function (id){
            return $http.delete('/api/bucket/item/' + id);
        };

        o.show = function (id){
            return $http.get('/api/bucket/' + id)
                .success(function (bucket){
                    return bucket;
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