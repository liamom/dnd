/// <reference path='../typings/angularjs/angular.d.ts' />
/// <reference path="CharacterController.ts" />
/// <reference path="RouteProvider.ts" />
var appModule = angular.module("DND", ['ngRoute']);
appModule.controller("Character", ["$scope",
    function ($scope) { return new Application.Controllers.CharacterController($scope); }]);
appModule.config(Application.RouteProviders.DND);
//appModule.factory("MyService", ["$http", "$location", ($http, $location)
//    => new Application.Services.MyService($http, $scope)]);
//appModule.directive("myDirective", ()
//    => new Application.Directives.MyDirective()); 
//# sourceMappingURL=App.js.map