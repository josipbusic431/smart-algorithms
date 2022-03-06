function MazeGenerator(dimension, width){

    const _dimension = dimension;
    const _width = width;
    

    const dfsTree = [];
    
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
       

        /*for (let i = 0; i < _dimension; i++) {
            
            ctx.beginPath();

            ctx.moveTo(i, Math.min(src.y, dest.y) - adjust);

            ctx.stroke();
        }*/
        
        //new Promise(resolve => setTimeout(resolve, 10));
    };   

    this.dfs = function(graph, cell){
        cell.visited = true;        
        for(let i=0; i < cell.next.length; i++){
            if(!cell.next.visited)
                this.dfs(cell.next, cell.next[i]);
        }        
    };

};

function Cell(x, y){
    this.x = x;
    this.y = y;
    this.visited = false;
    this.next = [];
    


};