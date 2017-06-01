var app = angular.module('modelServiceModule', []);
app.factory('modelService', [ function () {
    var savedData = {}

    function set(data) {
        savedData = data;
    }

    function get() {
        return savedData;
    }
    
    function setTemplateId(id) {
        savedData.templateId = id;
    }

    function getTemplateId() {
        return savedData.templateId;
    }
    
    return {
        set: set
        ,get: get
        ,setTemplateId: setTemplateId
        ,getTemplateId: getTemplateId
        
    }
}]);