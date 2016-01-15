/// <reference path='../typings/angularjs/angular.d.ts' />

module Application.Controllers {

    export class CharacterController {

        scope: any;
        data:  any;

        constructor($scope: ng.IScope) {
            this.scope = $scope;
            this.data = [];
        }
    }
}