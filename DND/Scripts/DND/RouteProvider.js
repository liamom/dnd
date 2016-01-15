/// <reference path='../typings/angularjs/angular-route.d.ts' />
var Application;
(function (Application) {
    var RouteProviders;
    (function (RouteProviders) {
        function DND($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/Game/_Characters',
                controller: 'Character'
            }).when('Characters', {
                templateUrl: '/Game/_Characters',
                controller: 'Character'
            }).when('game', {
                templateUrl: "Game/Game",
                controller: 'Character'
            });
        }
        RouteProviders.DND = DND;
    })(RouteProviders = Application.RouteProviders || (Application.RouteProviders = {}));
})(Application || (Application = {}));
//# sourceMappingURL=RouteProvider.js.map