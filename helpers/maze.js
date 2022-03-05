function Maze(rows, columns){
    let _cells = [];
    let _walls = [];
    let _maze = [];

    let init = function(){
        for(let i = 0; i < rows*columns; i++){
            _walls.push(i);
        }
    };

    this.generateRandomMaze = function(){
        //init();

        
      
    };


    let orientation = function(width, height){
        if(width > height)
            return 0; //vertical
        else if(width < height)
            return 1;//horizontal
        else
            return Math.random() > 0.5 ? 1 : 0;
    };

    let divide = function(x,y, width, height, orientation){

        if(orientation == 1){
            for(let i = x; i < width; i++){

            }    
        }
    };

    Object.defineProperty(this, "cells", {
        get: function() { return _cells; }
    });
}