'use strict';

angular.module('minesweeperApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.xSize = 8;
  	$scope.ySize = 8;
    $scope.grid = {};

    function initGrid(xSize, ySize){
    	for (var x = 0; x < xSize; x++) {
    		for (var y = 0; y < ySize; y++) {
    			if(!$scope.grid[x][y]) $scope.grid[x][y] = {};
  				$scope.grid[x][y].val = x + '-' + y;
    		}	
    	};
    }

    initGrid(8, 8);
  });
