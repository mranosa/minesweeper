'use strict';

angular.module('minesweeperApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.xSize = 8;
  	$scope.ysize = 8;
    $scope.grid = {};

    function initGrid(xSize, ysize){
    	for (var x = 0; x < xSize; x++) {
    		for (var y = 0; y < ySize; y++) {
  				$scope.grid[x][y].val = x + '-' + y;
    		}	
    	};
    }
  });
