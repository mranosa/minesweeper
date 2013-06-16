'use strict';

angular.module('minesweeperApp')
  .controller('MainCtrl', function ($scope, Grid) {
    
    $scope.grid = new Grid(8, 8);

    $scope.samplePoint = $scope.grid.getPoint(4, 4);

  });
