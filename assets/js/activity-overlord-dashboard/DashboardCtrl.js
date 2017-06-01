angular.module('CvAwesome.Dashboard', []).controller('DashboardCtrl', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    // Just a hack so we can type `SCOPE` in the Chrome inspector.
    SCOPE = $scope;
    $scope.me = window.SAILS_LOCALS.me;
    $scope.isCreated = $scope.me.cvCreated;
    console.log('Dashboard controller loaded');
    
    // have to remove SCOPE var and add update delete and preview function on click
}]);