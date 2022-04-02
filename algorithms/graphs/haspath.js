//iterative
const hasPathBFS = (graph, src, dst) => {
    const queue = [ src ];

    while(queue.length > 0){
        const current = queue.shift();

        if(current === dst) return true;

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;
}

//recursive
const hasPathDFS = (graph, src, dst) => {
    if(src === dst) return true;

    for(let neighbor of graph[src]){
        if(hasPathDFS(graph, neighbor, dst) === true){
            return true;
        }
    }    
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPathDFS(graph, 'f', 'k')); 
console.log(hasPathBFS(graph, 'f', 'k')); 