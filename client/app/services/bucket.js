'use strict';

angular.module('bucketListApp')
    .factory('Bucket', ['$http', function ($http){

        var o = {
            buckets: []
        };

        o.get = function (){
            return $http.get('/api/bucket/')
                .success(function (buckets){
                    console.log(buckets);
                    angular.copy(buckets, o.buckets);
                });
        };

        return o;
    }]);