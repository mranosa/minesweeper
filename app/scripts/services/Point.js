'use strict';

angular.module('minesweeperApp')
  .factory('Point', function () {
    var Point = function(x, y) {
      this.x = x;
      this.y = y;

      this.hasMines = false;
    };

    return Point;
  });
