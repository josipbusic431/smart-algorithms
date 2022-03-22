//iterative
// const depthFirstPrint = (graph, source) => {
//     const stack = [ source ];

//     while(stack.length > 0){
//         const currnet = stack.pop();
//         console.log(currnet);

//         for(let neighbor of graph[currnet]){
//             stack.push(neighbor);
//         }
//     }
// }

//Recursive
// const depthFirstPrint = (graph, source) => {
//     console.log(source);
//     for(let neighbor of graph[source]){
//         depthFirstPrint(graph, neighbor);
//     }
// };

//Iterative
const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//depthFirstPrint(graph, 'a');

breadthFirstPrint(graph, 'a');