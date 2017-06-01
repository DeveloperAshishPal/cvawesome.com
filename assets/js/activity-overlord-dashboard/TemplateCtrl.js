angular.module('CvAwesome.Template', ['modelServiceModule','ngCookies']).controller('TemplateCtrl', ['$scope', '$http', '$interval','modelService','$cookieStore', function ($scope, $http, $interval,modelService,$cookieStore) {
    // Just a hack so we can type `SCOPE` in the Chrome inspector.
    SCOPE = $scope;
    $scope.me = window.SAILS_LOCALS.me;
    $scope.isCreated = $scope.me.cvCreated;
    console.log('Template controller loaded');
    
    $http.get('/template').success(function(result){
        console.log(result);
        $scope.templates = result;
    });
    
    $scope.grabId = function(templateId){
        $cookieStore.put('templateId',templateId);
        modelService.setTemplateId(templateId);
    }
    
}]);
