function Maze(canvasControl, dimension, line_width){
    const _canvasControl = canvasControl;

    const DIMENTION = dimension;
    const LINE_WIDTH = line_width;
  
    const start = 0;
    let end = 0;
    let longestDist = 0;
    const graph = [];
    const tree = [];
    const visited = {};
    let mygraph = [];
  
    // add nodes to graph
    for (let i = 0; i < DIMENTION * DIMENTION; i++) {
      graph.push({
        index: i,
        to: [],
      });
    }    

    explore(start, 0);
    draw();
  
    // add edges
    for (let i = 0; i < DIMENTION * DIMENTION; i++) {
      const node = graph[i];
      const { up, down, left, right } = getNeighbors(i);
      const edges = [up, down, right, left].filter(e => e != null);
      node.edges = edges;
    }    
  
    function explore(index, dist) {
      visited[index] = true;
      const neighbors = getNeighbors(index);
  
      // keep track of the node furthest from start that's on the edge
      if (neighbors.length < 4 && dist > longestDist) {
        longestDist = dist;
        end = index;
      }
  
      for (let i = 0; i < neighbors.length; i++) {
        const next = neighbors[i];
        if (!visited[next]) {
          tree.push([index, next]); // add pair to tree
          explore(next, dist + 1);
        }
      }
    }
  
    function getNeighbors(index) {
      const { row, column } = toRowColumn(index);
      const up = toIndex(row - 1, column);
      const down = toIndex(row + 1, column);
      const left = toIndex(row, column - 1);
      const right = toIndex(row, column + 1);
      return shuffle([up, down, left, right].filter(n => n));
    }
  
    function toRowColumn(index) {
      const row = Math.floor(index / DIMENTION);
      const column = index % DIMENTION;
      return { row, column };
    }
  
    function toIndex(row, column) {
      if (row < 0 || row >= DIMENTION) return null;
      if (column < 0 || column >= DIMENTION) return null;
      return (row * DIMENTION) + column;
    }
  
    function shuffle(array){
      for(let i = 0; i < array.length; i++){
        const randomIndex = Math.floor(Math.random() * array.length);
        const temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
      }
      return array;
    }
  
    async function draw() {
  
      const adjust = LINE_WIDTH / 2; // used to make sharp corners
      const borderWidth = adjust / 2;
  
      //const canvas = document.getElementById('mazeCanvas');
      const canvas = document.getElementById(_canvasControl);
      canvas.setAttribute("width", DIMENTION*10);
      canvas.setAttribute("height", DIMENTION*10);
      const width = canvas.getAttribute('width') - (borderWidth * 2);
      const height = canvas.getAttribute('height') - (borderWidth * 2);
  
      const xSpace = width / DIMENTION;
      const xStart = borderWidth + xSpace / 2;
      const ySpace = height / DIMENTION;
      const yStart = borderWidth + ySpace / 2;
  
      const ctx = canvas.getContext('2d');
  
      // fill background
      ctx.fillStyle = '#333';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.lineWidth = LINE_WIDTH;
      ctx.strokeStyle = 'white';
      
      for (let i = 0; i < tree.length; i++) {
        const pair = tree[i];
        const src = toRowColumn(pair[0]);
        src.x = xStart + src.row * xSpace;
        src.y = yStart + src.column * ySpace;
        const dest = toRowColumn(pair[1]);
        dest.x = xStart + dest.row * xSpace;
        dest.y = yStart + dest.column * ySpace;
  
        ctx.beginPath();
        mygraph.push(pair);
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
        
        await new Promise(resolve => setTimeout(resolve, 10));
      }
  
      console.log("Result:");
      console.log("END:"+end);
      // show start end end of maze
      paintIndex(ctx, start, 'lime', adjust, xStart, xSpace, yStart, ySpace);
      paintIndex(ctx, end, 'deepskyblue', adjust, xStart, xSpace, yStart, ySpace);

      converToGraph(end);
    }

    function converToGraph(end){
      var graph = [];

      for(let edge of tree){        
         const [a, b] = edge;
         if(!(a in graph)) graph[a] = {array: [], isEnd: false};
         if(!(b in graph)) graph[b] = {array: [], isEnd: false};
        graph[a].array.push(b);
        graph[b].array.push(a);       
      
        if(a === end) graph[a].isEnd = true;
        
        else if(b === end) graph[b].isEnd = true;        
      }      
      console.log(graph);
      return graph;
    }
   
  
    function paintIndex(ctx, index, color, adjust, xStart, xSpace, yStart, ySpace) {
      const { row, column } = toRowColumn(index);
      const x = xStart + row * xSpace;
      const y = yStart + column * ySpace;
      ctx.fillStyle = color;
      ctx.fillRect(x - adjust, y - adjust, LINE_WIDTH, LINE_WIDTH);
      ctx.fillStyle = '#333';
    } 

    Object.defineProperty(this, "graph", {
      get: function(){return graph;}
    });
    Object.defineProperty(this, "mygraph", {
      get: function(){return mygraph;}
    });
    Object.defineProperty(this, "tree", {
      get: function(){return tree;}
    });
    Object.defineProperty(this, "visited", {
      get: function(){return visited;}
    });

  };