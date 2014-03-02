var firstAppControllers = angular.module('firstAppControllers', []);

firstAppControllers.controller('dataController',['$scope','$http', '$routeParams',
    function($scope,$http,$routeParams) {
        console.log("passo nel controller")
        $http.get('api/readData/' + reouteParam.id).
            success(function(data){
                $scope.dataTitle = data.dataTitle;
                $scope.dataText = data.dataText;
            });
    }]);