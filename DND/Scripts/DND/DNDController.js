/// <reference path='../typings/angularjs/angular.d.ts' />
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var CharacterController = (function () {
            function CharacterController($scope) {
                this.scope = $scope;
                this.data = [];
                this.data.test = "hello";
            }
            return CharacterController;
        })();
        Controllers.CharacterController = CharacterController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
//# sourceMappingURL=DNDController.js.map