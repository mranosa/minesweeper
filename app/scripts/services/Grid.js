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

      this.initAdjacentPoints();
      this.initMines(10);
    };

    Grid.prototype = {
      getPoint: function(x, y){
        if(x >= this.xSize || x < 0 || y >= this.ySize || y < 0) 
          return undefined;

        return this.lines[x][y];
      },
      getRandomPoint: function(){
        var xRandom = this.getRandomInt(0, this.xSize - 1);
        var yRandom = this.getRandomInt(0, this.ySize - 1);

        return this.getPoint(xRandom, yRandom);
      }, 
      getRandomInt: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      initMines: function(mineCount){
        while(mineCount != 0){
          var currPoint = this.getRandomPoint();
          if(!currPoint.hasMines){
            currPoint.hasMines = true;
            mineCount--;
          }
        }
      },
      initAdjacentPoints: function(){
        for (var x = 0; x < xSize; x++) {
          for (var y = 0; y < ySize; y++) {
            var currPoint = this.getPoint(x, y);
            
            if(this.getPoint(x - 1, y - 1)) currPoint.adjacentPoints.push(this.getPoint(x - 1, y - 1));
            if(this.getPoint(x - 1, y)) currPoint.adjacentPoints.push(this.getPoint(x - 1, y));
            if(this.getPoint(x - 1, y + 1)) currPoint.adjacentPoints.push(this.getPoint(x - 1, y + 1));
            if(this.getPoint(x, y - 1)) currPoint.adjacentPoints.push(this.getPoint(x, y - 1));
            if(this.getPoint(x, y + 1)) currPoint.adjacentPoints.push(this.getPoint(x, y + 1));
            if(this.getPoint(x + 1, y - 1)) currPoint.adjacentPoints.push(this.getPoint(x + 1, y - 1));
            if(this.getPoint(x + 1, y)) currPoint.adjacentPoints.push(this.getPoint(x + 1, y));
            if(this.getPoint(x + 1, y + 1)) currPoint.adjacentPoints.push(this.getPoint(x + 1, y + 1));
          } 
        };
      }
    }

    return Grid;
  });
