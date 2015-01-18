(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChessCtrl', ChessCtrl);

    ChessCtrl.$inject = ['$scope']; 

    function ChessCtrl($scope) {
        $scope.title = 'ChessCtrl';

        activate();

        function activate() { }
    }
})();
