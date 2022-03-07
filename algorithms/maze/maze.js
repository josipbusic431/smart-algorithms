function MazeGenerator(dimension, width){

    const _dimension = dimension;
    const _width = width; 
    let tree = [];
    let maze = [];

    let generate = function(){
        fillTree();

        let stack = [];
        let current = tree[0];
        current.visited = true;
        stack.push(current.index);
        maze.push(current.index);
        
        while(stack.length > 0){
            let index = stack.pop();
            current = tree[index];

            //if(current.next.length > 0 && current.next.filter(n =>n.visited == false).length > 0){
                if(current.next.length > 0 && current.next.filter(n =>n.visited == false).length > 0){
                stack.push(current);
                let neigbor = getRandomNeighbor(current.index);
                //remove the wall 
                neigbor.visited = true;
                stack.push(neigbor);
                maze.push(neigbor);
                tree[neigbor.index].visited = true;
            }
        }
        console.log("Maze")
        console.log(maze);        
    };

    let fillTree = function(){        
        for(let i = 0; i < _dimension; i++){
            for(let j = 0; j < _dimension; j++){                
                let cell = new Cell(toIndex(i,j));                
                let neighbors = getNeighbor(i,j);

                for(let z = 0; z < neighbors.length; z++){
                    let current = new Cell(neighbors[z]);
                    cell.next.push(current);
                }
                tree.push(cell);
            }
        }
        console.log(tree);
    };
    
    this.draw = function() {
        let canvas = document.getElementById("mazeCanvas");
        canvas.setAttribute("width", _width);
        canvas.setAttribute("height", _width);

        //fill the background
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';          

        const lineWidth = _width /_dimension;     
        for(let x = 0; x < _dimension; x++){   
            for(let y = 0; y < _dimension; y++){
                //draw rows
                let yoffset = y * lineWidth;
                ctx.beginPath(); 
                ctx.moveTo(x * lineWidth, yoffset);
                ctx.lineTo((x * lineWidth)+ lineWidth,yoffset);
                ctx.stroke();

                //draw columns
                let xoffset = x * lineWidth;
                ctx.beginPath(); 
                ctx.moveTo(xoffset, y * lineWidth);
                ctx.lineTo(xoffset, (y * lineWidth) + lineWidth);
                ctx.stroke();               
            }           
        }

        //fill tree
        generate();
    };
    

    let toRowColumn = function(index){      
        this.x = Math.floor(index / _dimension);
        this.y = index % _dimension;
        return {x, y};
    };

    let toIndex = function(row, column) {        
        if (row < 0 || row >= _dimension) return null;
        if (column < 0 || column >= _dimension) return null;
        
        return (row * _dimension) + column;
    };
       
    let getNeighbor = function(row, column){
        const up = toIndex(row - 1, column);
        const down = toIndex(row + 1, column);
        const left = toIndex(row, column - 1);
        const right = toIndex(row, column + 1);
        return [up, down, left, right].filter(n => n != null);
    }

    let getRandomNeighbor = function(index){
        let {x, y} = toRowColumn(index);        
        let neighbors = getNeighbor(x, y);
        let notVisited = [];

        for(let i = 0; i < neighbors.length; i++){
            if(!tree[neighbors[i]].visited){
                notVisited.push(neighbors[i]);
            }
        }       
        return notVisited[utils.randomIntMax(notVisited.length)];
    };

};

function Cell(index){
    this.index = index;       
    this.visited = false;
    this.next = [];

   

};