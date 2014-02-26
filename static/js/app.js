/* Author: Samuele
*/
var firstApp = angular.module('firstApp',['ngRoute','firstAppControllers']);

firstApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/ReadData/:id',
            {
                templateUrl: 'partials/ReadData',
                controller: 'dataController'
            });
    }]);