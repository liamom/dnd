/// <reference path='../typings/angularjs/angular-route.d.ts' />

module Application.RouteProviders {

    export function DND($routeProvider: angular.route.IRouteProvider) {
        $routeProvider.when('/', {
            templateUrl: '/Game/_Characters',
            controller: 'Character'
        }).when('Characters', {
            templateUrl: '/Game/_Characters',
            controller: 'Character'
        }).when('game', {
            templateUrl: "Game/Game",
            controller  : 'Character' 
        });
    }
}