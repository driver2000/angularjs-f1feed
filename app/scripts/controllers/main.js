'use strict';

angular.module('angularjsApp')
/* Drivers Controller */
.controller('driversController', ['$scope', 'ergastAPIservice', function($scope, service) {
    $scope.nameFilter = null;
    $scope.driversList = [];

    $scope.searchFilter = function(driver) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    }

    service.getDrivers().success(function(response) {
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

}])

/* Driver Controller */
.controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function(response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function(response) {
        $scope.races = response.MRData.RaceTable.Races;
    });
})

.controller('tabsController', function($scope){
    $scope.tabs = [{
        title: 'Tab1',
        content: 'Ciao Ciao'
    }];
     $scope.tabs.activeTab = 0;
});