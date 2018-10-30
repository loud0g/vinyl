// https://docs.angularjs.org/tutorial - GOOD STARTING POINT

var recordCatalogApp = angular.module('recordCatalogApp', []);

recordCatalogApp.controller('catalogController', function ($scope, $http) {
    $http.get('/collection').then(function (collection) {
        $scope.collection = collection.data;
    });
});