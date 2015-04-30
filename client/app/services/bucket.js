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

        o.addItem = function (newItem, id){
            return $http.post('/api/bucket/'+id+'/item/', newItem)
                .success(function (data){
                    o.items.push(data);
                })
                .error(function (err){
                    console.log(err);
                });
        };
        
        o.completeItem = function (id, item){
            return $http.put('/api/bucket/'+id+'/item/'+item._id, item)
                .success(function (data){
                    return data;
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