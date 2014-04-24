'use strict';

angular.module('angularjsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angularjsApp.services'])
    .config(function($routeProvider) {
    $routeProvider.when('/drivers/:id', {
        templateUrl: 'views/driver.html',
        controller: 'driverController'
    })
        .when('/drivers', {
        templateUrl: 'views/main.html',
        controller: 'driversController'
    })
        .otherwise({
        redirectTo: '/drivers'
    });
});