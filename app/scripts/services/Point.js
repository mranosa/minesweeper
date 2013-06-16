'use strict';

angular.module('minesweeperApp')
  .factory('Point', function () {
    var Point = function(val) {
      this.val = val;
    };

    return Point;
  });
