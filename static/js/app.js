/* Author: Samuele
*/
var firstApp = angular.module('firstApp',['ngRoute','firstAppControllers']);

firstApp.config(['$routeProvider',
    function($routeProvider) {
        console.log("passo da app.js");
        $routeProvider.
            when('/readData/:id',
            {
                templateUrl: 'partials/ReadData',
                controller: 'dataController'
            });
    }]);