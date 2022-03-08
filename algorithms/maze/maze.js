function MazeGenerator(dimension, width){

    const _dimension = dimension;
    const _width = width; 
    let tree = [];
    let maze = [];

    let generate = function(){
        fillTree();

        let stack = [];
        maze = [];
        let current = tree[0];
        current.visited = true;
        stack.push(current);
        maze.push(current.index);
        updateTree(current.index);
        
        while(stack.length > 0){
            current = stack.pop();
            if(current.next.length > 0 && current.next.filter(n =>n.visited == false).length > 0){               
                stack.push(current);
                
                let neigbor = getRandomNeighbor(current.next.filter(n => n.visited == false));
                //remove the wall 
                neigbor.visited = true;
                stack.push(tree[neigbor.index]);
                maze.push(neigbor.index);
                updateTree(neigbor.index);
            }
        }
        console.log("Maze")
        console.log(maze);        
    };

    let updateTree = function(index){        
        for(let i = 0; i < tree.length; i++){
            if(tree[i].index == index){
                tree[i].visited = true;
            }
            for(let j = 0; j < tree[i].next.length; j++){
                if(tree[i].next[j].index == index){
                    tree[i].next[j].visited = true;
                }
            }
        }
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
        generate();

        let canvas = document.getElementById("mazeCanvas");
        canvas.setAttribute("width", _width);
        canvas.setAttribute("height", _width);

        //fill the background
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#00d1b2';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';   

        const xSpace = width / _dimension;
        const adjust = xSpace / 2;
        const borderWidth = adjust / 2;
        const xStart = borderWidth + xSpace / 2;
        const ySpace = _width / _dimension;
        const yStart = borderWidth + ySpace / 2;
             
        console.log({xSpace, adjust, borderWidth, xStart, ySpace, yStart});

        //const lineWidth = _width /_dimension; 
        for (let i = 0; i < maze.length; i++) {
            const pair = maze[i];
            const src = toRowColumn(pair[0]);
            src.x = xStart + src.row * xSpace;
            src.y = yStart + src.column * ySpace;
            const dest = toRowColumn(pair[1]);
            dest.x = xStart + dest.row * xSpace;
            dest.y = yStart + dest.column * ySpace;
        
            ctx.beginPath();
        
            // vertical
            if (src.x === dest.x) {
              ctx.moveTo(src.x, Math.min(src.y, dest.y) - adjust);
              ctx.lineTo(dest.x, Math.max(src.y, dest.y) + adjust);
            }
            // horizontal
            else {
              ctx.moveTo(Math.min(src.x, dest.x) - adjust, src.y);
              ctx.lineTo(Math.max(src.x, dest.x) + adjust, dest.y);
            }
            ctx.stroke();
        
            //new Promise(resolve => setTimeout(resolve, 10));
          }

        // for(let i = 0; i < maze.length-1; i++){
        //     let src = toRowColumn(maze[i]);
        //     let dst = toRowColumn(maze[i+1]);

        //     ctx.beginPath(); 
        //     //draw horizontal
        //     if(src.x == dst.x){                
        //         let sx = src.x * lineWidth;
        //         let sy = src.y + lineWidth;
        //         ctx.moveTo(sx, sy);

        //         let dx = (dst.x + lineWidth);
        //         let dy = (dst.y * lineWidth);
        //         ctx.lineTo(dx, dy);
        //     } 
        //     //draw vertical
        //     else{
                
        //         let sx = src.x + lineWidth;
        //         let sy = src.y * lineWidth;
        //         ctx.moveTo(sx, sy);

        //         let dx = (dst.x * lineWidth);
        //         let dy = (dst.y + lineWidth)*2;
        //         ctx.lineTo(dx, dy);
        //     }
        //     ctx.stroke();
        // }
        
        //  for(let x = 0; x < _dimension; x++){   
        //     for(let y = 0; y < _dimension; y++){                
        //         //draw rows
        //         let yoffset = y * lineWidth;
        //         ctx.beginPath(); 
        //         ctx.moveTo(x * lineWidth, yoffset);
        //         ctx.lineTo((x * lineWidth)+ lineWidth,yoffset);
        //         ctx.stroke();

        //         //draw columns
        //         let xoffset = x * lineWidth;
        //         ctx.beginPath(); 
        //         ctx.moveTo(xoffset, y * lineWidth);
        //         ctx.lineTo(xoffset, (y * lineWidth) + lineWidth);
        //         ctx.stroke();               
        //     }           
        // }

        // for(let i = 0; i < maze.length; i++){
        //     if(i + 1 < maze.length){               
        //         const src = toRowColumn(maze[i]);               
        //         const dest = toRowColumn(maze[i+1]);               
    
        //         ctx.beginPath();

        //         //debugger;
        //         ctx.fillStyle = 'green';
        //         ctx.fillRect(src.x+5, src.y+5, dest.x*(_width/_dimension)-5, dest.y*(_width/_dimension)-5);
    
        //         // // vertical
        //         // if (src.x === dest.x) {
        //         // ctx.moveTo(src.x, Math.min(src.y, dest.y) - lineWidth);
        //         // ctx.lineTo(dest.x, Math.max(src.y, dest.y) + lineWidth);
        //         // }
        //         // // horizontal
        //         // else {
        //         // ctx.moveTo(Math.min(src.x, dest.x), src.y);
        //         // ctx.lineTo(Math.max(src.x, dest.x), dest.y);
        //         // }
        //         ctx.stroke();
        //     }          
        // }

       
        
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

    let getRandomNeighbor = function(next){
        if(next.length > 1)
            return next.filter(n => n.visited == false)[utils.randomIntMax(next.length)];
        else
            if(!next.visited)
                return next[0];
            
        return null;
    };

    // let getRandomNeighbor = function(index){
    //     let {x, y} = toRowColumn(index);        
    //     let neighbors = getNeighbor(x, y);
    //     let notVisited = [];

    //     for(let i = 0; i < neighbors.length; i++){
    //         if(!tree[neighbors[i]].visited){
    //             notVisited.push(tree[neighbors[i]]);
    //         }
    //     }     
    //     debugger;  
    //     return notVisited[utils.randomIntMax(notVisited.length)];
    // };

};

function Cell(index){
    this.index = index;       
    this.visited = false;
    this.next = [];

   

};