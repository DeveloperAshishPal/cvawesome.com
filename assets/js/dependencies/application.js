var app = angular.module('ResumeCreator',[]);

/*app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    // route for the welcome page
        .when('/', {
            templateUrl: 'templates/welcome/index.html'
            , controller: 'welcomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);*/

app.controller('resumeCreatorCtrl', function ($scope) {
    // log to console about the working of ctrl
    console.log('Resume Creator Ctrl working');
    
    $scope.submitLogin = function(){
        console.log('button click working');
    };
    
    $scope.submitRegister = function(){
        console.log('button click working');
    };
    
});