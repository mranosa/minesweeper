'use strict';

angular.module('minesweeperApp')
  .factory('Point', function () {
    var Point = function(x, y) {
      this.x = x;
      this.y = y;
      this.adjacentPoints = [];
      this.adjacentMines = 0;

      this.hasMines = false;
    };

    return Point;
  });
