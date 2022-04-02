//algorithm to count the components in underected graph
const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;

    for(let node in graph){
        if(explore(graph, node, visited) === true){
            count += 1;
        }
    }
    return count;    
};

const explore = (graph, current, visited) => {    
    if(visited.has(String(current))) return false;

    visited.add(String(current));

    for(let neighbor of graph[current]){
        explore(graph, neighbor, visited);
    }
    return true;
};

//3 components
const graph ={
    1: [2],
    2: [1],
    3: [],
    4: [6],
    5: [6],
    6: [4,5,7,8],
    7: [6],
    8: [6],
};
const graph1 ={
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]   
};

console.log(connectedComponentsCount(graph));