'use strict';

angular.module('minesweeperApp')
  .factory('Grid', function (Point) {
    var Grid = function(xSize, ySize) {
      this.xSize = xSize;
      this.ySize = ySize;
      this.lines = [];

      for (var x = 0; x < xSize; x++) {
        var line = [];
        for (var y = 0; y < ySize; y++) {
          line.push(new Point(x, y));
        } 

        this.lines.push(line);
      };
    };

    Grid.prototype = {
      getPoint: function(x, y){
        return this.lines[x][y];
      },
      getRandomPoint: function(){
        //TODO implement me
      }
    }

    return Grid;
  });
