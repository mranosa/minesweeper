'use strict';

angular.module('minesweeperApp')
  .controller('MainCtrl', function ($scope, Grid) {
    
    $scope.grid = new Grid(8, 8);
    
  });
