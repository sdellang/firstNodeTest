/* Author: Samuele
*/
var firstApp = angular.module('firstApp',['ngRoute','firstAppControllers']);

firstApp.config(['$routeProvider',
    function($routeProvider) {
        console.log("passo da app.js");
        $routeProvider.
            when('/', {
                templateUrl: 'partials/main',
                controller: 'mainController'
            }).
            when('/readData/:id',
            {
                templateUrl: 'partials/ReadData',
                controller: 'dataController'
            }).
            when('/addPost/',
            {
                templateUrl: 'partials/addPost',
                controller: 'addPostController'
            });
    }]);