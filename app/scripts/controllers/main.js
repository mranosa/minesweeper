'use strict';

angular.module('minesweeperApp')
  .controller('MainCtrl', function ($scope, Point) {
  	$scope.xSize = 8;
  	$scope.ySize = 8;
    $scope.lines = [];

    function initGrid(xSize, ySize){
    	for (var x = 0; x < xSize; x++) {
    		var line = [];
    		for (var y = 0; y < ySize; y++) {
    			line.push(new Point(x + '-' + y));
    		}	

    		$scope.lines.push(line);
    	};
    }

    initGrid($scope.xSize, $scope.ySize);
  });
