var appRoot = angular.module('main', ['ngRoute', 'ngResource', 'angularStart.services', 'angularStar.directives']);

appRoot.config(['$routeProvider'], function($routeProvider) {
    $routeProvider.when('/chess', { templateUrl: '/chess/index', controller: 'ChessController' });
});