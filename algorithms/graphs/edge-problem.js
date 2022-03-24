const undirectedPath = (edges, nodeA, nodeB) =>{
    const graph = buildGraph(edges);
    console.log(graph);
    return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {  
    if(src === dst) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dst, visited) === true){
            return true;
        }
    }
    return false;
};

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges){
        const [a, b] = edge;

        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
};
//underected graph
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

var solution = undirectedPath(edges, 'j', 'm');
console.log(solution);

// const graph = {
//     i: [j, k],
//     j: [i],
//     k: [m, i, l],
//     m: [k],
//     l: [k],
//     o: [n],
//     n: [o]
// };

