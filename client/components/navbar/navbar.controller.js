'use strict';

angular.module('bucketListApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Buckets',
      'state': 'buckets'
    },
    {
      'title': 'Add Item',
      'state': 'add-item'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });