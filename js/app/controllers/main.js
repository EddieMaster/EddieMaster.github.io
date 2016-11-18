/**
 * Created by EddieMaster on 12/11/2016.
 */
(function () {
    angular
        .module('app')
        .controller('main',['$scope','$translate',main]);
    function main($scope,$translate) {
        console.log('Main controller');
        this.prueba = 'prueba';
        $scope.lang = function (key) {
            $translate.use(key);
        }
    }


})();
