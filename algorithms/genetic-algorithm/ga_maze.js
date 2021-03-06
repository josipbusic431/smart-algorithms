function GaMaze(maxIteration, mutationRate, crossoverRate, populationSize, genSize, graph){

    //algoritham params
    let _maxIteration = maxIteration;
    let _mutationRate = mutationRate;
    let _crossoverRate = crossoverRate;   
    let _populationSize = populationSize;
    let _genSize = genSize;
    let _best = undefined;
    let _population = [];
    
    //data    
    let _graph = graph;

    //graph properties
    let graphBest = [];
    let graphCandidate = [];
    let graphPopulation = [];

    this.start = function(){
        clearConsole();
        iter = 0;

        graphCand = [];
        graphBest = [];

        for(let i = 0; i < _maxIteration; i++){
            
        }

    };

    let iteration = function(){

    };

    let fitness = function(candidate, ){

    };

    let populationScore = function(){

    };   
    
};

function Candidate(){
    solution = [];
    let _fitness = 0;

    Object.defineProperty(this, "fitness",{
        get: function(){ return _fitness;}
    });
}

function Select(){
    this.tournament = function(population, k){
        let parents = [];
        let indexes = [];
       
        while(parents.length < k){
            let index = utils.randomIntMax(population.length - 1);
            if(!indexes.includes(index)){
                indexes.push(index);
                parents.push(population[index]);
            }
        }        
        //sort array
        indexes = indexes.sort((a,b) => a - b);
        
        return [indexes[0], indexes[1]];
    };

    this.roulete = function(population, totalSum){
        let r = utils.randomIntMinMax(totalSum);
        let sum = 0;
        let parent = undefined;

        for(let i = 0; i < population.length; i++){
            if(sum < r){
                sum += population[i].fitness;
                parent = JSON.parse(JSON.stringify(population[i]));                
            }
            else{ break; }
        }
        return parent;
    };
};

function Crossover(){
    this.onePoint = function(child1, child2){
        let point = Utils.randomIntMax(child1.length);

        for(let i = point; i < child1.length; i++){
            let tmp = JSON.parse(JSON.stringify(child1[i])); 
            child1[i] = JSON.parse(JSON.stringify(child2[i]));
            child2[i] = tmp;
        }
    };

    this.twoPoint = function(child1, child2){
        let point1 = Utils.randomIntMax(child1.length/2);
        let point2 = Utils.randomIntMax(child1.length/2, child1.length - 1);

        for(let i = point1; i < point2; i++){
            let tmp = JSON.parse(JSON.stringify(child1[i])); 
            child1[i] = JSON.parse(JSON.stringify(child2[i]));
            child2[i] = tmp;
        }
    };

    this.uniformal = function(child1, child2){
        for(let i = 0; i < child1.length; i++){
            if(Math.random() > 0.5){
                let tmp = JSON.parse(JSON.stringify(child1[i])); 
                child1[i] = JSON.parse(JSON.stringify(child2[i]));
                child2[i] = tmp;
            }            
        }
    };
};

function Mutation(){

    this.oneTime = function(parent){
        var index = utils.randomIntMax(parent.length - 1);
        parent[index] = parent[index] == "0" ? "1" : "0";
        return parent;
    };

    this.nTimes = function(parent, times){
        for(var i = 0; i < times; i++){
            this.oneTime(parent);
        }
        return parent;
    };

};