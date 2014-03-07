var firstAppControllers = angular.module('firstAppControllers', []);


firstAppControllers.controller('mainController',['$scope','$http', '$routeParams',
    function($scope,$http,$routeParams) {
        console.log("passo nel MAIN controller");
    }]);
firstAppControllers.controller('dataController',['$scope','$http', '$routeParams',
    function($scope,$http,$routeParams) {
        console.log("passo nel DATA controller");
        $http.get('api/readData/' + $routeParams.id).
            success(function(data){
                $scope.data = data.data;
            }).error(function(error) {
                console.log(error);
            });
    }]);