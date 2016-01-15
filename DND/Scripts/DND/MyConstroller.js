/// <reference path='../typings/angularjs/angular.d.ts' />
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var MyController = (function () {
            function MyController($scope) {
                this.scope = $scope;
                this.data = [];
                this.data.test = "hello";
            }
            return MyController;
        })();
        Controllers.MyController = MyController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
//# sourceMappingURL=MyConstroller.js.map