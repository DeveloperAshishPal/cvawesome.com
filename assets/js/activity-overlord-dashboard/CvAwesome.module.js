var app = angular.module('CvAwesome', ['ngRoute'
                                       ,'CvAwesome.Dashboard'
                                       ,'CvAwesome.Template'
                                       ,'CvAwesome.Wizard']);

// Set up all of our HTTP requests to use a special header
// which contains the CSRF token.
// More about CSRF here: http://sailsjs.org/#/documentation/concepts/Security/CSRF.html
app.config(['$httpProvider', function($httpProvider){
  // Set the X-CSRF-Token header on every http request.
  // (this doesn't take care of sockets!  We do that elsewhere.)
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = window.SAILS_LOCALS._csrf;
}]);



app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'templates/dashboard/index.html',
    controller: 'DashboardCtrl'
  })
  .when('/template', {
    templateUrl: 'templates/dashboard/template/index.html',
    controller: 'TemplateCtrl'
  })
  .when('/wizard', {
    templateUrl: 'templates/dashboard/wizard/index.html',
    controller: 'WizardCtrl'
  })
  .when('/preview', {
    templateUrl: 'templates/dashboard/preview/index.html',
    controller: 'MainController'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);

app.controller('MainController',['$scope',function($scope){
    console.log('main controller loaded');
}]);


