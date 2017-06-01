angular.module('CvAwesome.Wizard', ['modelServiceModule','ngCookies']).controller('WizardCtrl', ['$scope', '$http','$location', 'modelService','$cookieStore', function ($scope, $http,$location, modelService,$cookieStore) {
    // Just a hack so we can type `SCOPE` in the Chrome inspector.
    SCOPE = $scope;
    console.log('Wizard controller loaded');
    $scope.templateId = modelService.getTemplateId();
    $scope.templateId = $cookieStore.get('templateId');
    console.log($scope.templateId);
    // to redirect to location of template id is empty i.e page is refreshed
    if($scope.templateId === undefined || $scope.templateId===null){
        $location.url('/template');
    }
    
    
}]);