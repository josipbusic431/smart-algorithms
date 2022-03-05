function StocasticHillClimbing(data, knapsackSize, numberOfIteration){
    //data
    const _data = data;
    let _knapsackSize = knapsackSize;

    //algoritham params
    let _numberOfIteration = numberOfIteration;
    let iter = 0;   
    let best = [];

    //graph properties
    let costs = [];
    let bestCosts = [];

    //calculate cost of the generated solution
    let costFunc = function(solution){ 
        let sumWeight = 0;
        let sumValue = 0;

        //calculate weight
        for(let i = 0; i < solution.length;i++){            
            if(solution[i] === 1){     
                sumWeight += (_data[i * 2]);
                sumValue += (_data[i * 2 + 1]);
            }            
        }         
        
        if(sumWeight > _knapsackSize){
            sumValue = 0;
        }               
        return sumValue;
    };
    this.calcWeight = function(solution){
        var value = 0;
        for(let i = 0; i < solution.length; i++){
            if(solution[i] == 1){                
                value +=  _data[i * 2];
            }            
        }  
        return value;
    };
    //generate random solution
    let randomSolution = function(){        
        candidate = [];
        for(let i = 0; i < _data.length; i=i+2){
            if(Math.random() > 0.5){
                candidate.push(1) 
            } else {
                candidate.push(0);
            }
        }
        return candidate;
    };
    let randomNeighbor = function(candidate){
        let length = (candidate.length) - 1;
        let randomIndex = parseInt(Math.random() * length);
        
        if(candidate[randomIndex] == 1){
            candidate[randomIndex] = 0;
        }
        else{
            candidate[randomIndex] = 1;
        }
        return candidate;
    };
    //begin the algorithm
    this.start = function(){
        clearConsole();
        iter = 0;
        costs = [];
        bestCosts = [];

        //set best
        best = randomSolution();
        candidate = randomSolution();        

        for(let i = 0; i < _numberOfIteration; i++){
            best = iteration(JSON.parse(JSON.stringify(candidate)));
            iter++;
        }
        pintToConsole();
        pintToConsole("\n *** BEST SOLUTION! *** ");
        pintToConsole(JSON.stringify(best));
        pintToConsole("VALUE: "+costFunc(best));
        pintToConsole("WEIGHT: "+this.calcWeight(best));        
    }; 
    //define iteration function
    let iteration = function(current){
        let candidate = randomNeighbor(current);
        
        //calculate cost
        let candidateCost = costFunc(candidate);
        let bestCost = costFunc(best);

        costs.push(candidateCost);
        bestCosts.push(bestCost);

        if(candidateCost > bestCost){
            best = JSON.parse(JSON.stringify(candidate));
        }
        pintToConsole("[ "+iter+" ]  VALUE: "+candidateCost+"    BEST VALUE: "+bestCost)
        return JSON.parse(JSON.stringify(best));
    };
    let clearConsole = function(){
        var txtArea = document.getElementById("console");
        txtArea.innerHTML ="";
    };

    let pintToConsole = function(text){
        var txtArea = document.getElementById("console");
        txtArea.innerHTML += text + "\n";
    };

     //getter/setter
     Object.defineProperty(this, "best", {
        get: function(){ return best; }
    });
    Object.defineProperty(this, "costs", {
        get: function(){ return costs; }
    });
    Object.defineProperty(this, "iter", {
        get: function(){ return iter; }
    });
    Object.defineProperty(this, "bestCosts", {
        get: function(){ return bestCosts; }
    });    
    Object.defineProperty(this, "numberOfIteration", {
        get: function(){ return _numberOfIteration; },
        set: function(value){ _numberOfIteration = value; }
    }); 
    Object.defineProperty(this, "_knapsackSize", {
        get: function(){ return _knapsackSize; },
        set: function(value){ _knapsackSize = value; }
    });


};