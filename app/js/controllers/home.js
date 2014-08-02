'use strict';

angular.module('templateApp')
.controller('HomeCtrl', ['$scope', '$http', '$location', 
            function ($scope, $http, $location) {

                $scope.go = function(path) {
                    $location.path(path);
                };
            }]);
