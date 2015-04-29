'use strict';

angular.module('bucketListApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular-datepicker',
  'Postman'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });