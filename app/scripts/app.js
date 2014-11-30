'use strict';

angular.module('angularjsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mgcrea.ngStrap.tab',
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
        .when('/tabs', {
        templateUrl: 'views/tabs.html',
        controller: 'tabsController'
    })
        .otherwise({
        redirectTo: '/drivers'
    });
});