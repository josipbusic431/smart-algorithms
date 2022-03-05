function TabuSearch(numberOfIteration, maxSizeTabuList, minSpace, maxSpace){
    //data
    let _minSpace = minSpace;
    let _maxSpace = maxSpace;

    //algoritham params
    let _maxSizeTabuList = maxSizeTabuList;
    let _numberOfIteration = numberOfIteration;
    let iter = 0;   
    let best = undefined;
    let bestCandidate = undefined;
    let tabuList = [];

     //graph properties
     let graphCand = [];
     let graphBest = [];

    //Ackley function
    let cost = function(candidate){
        var x = candidate.x;
        var y = candidate.y;

        var ackley = -20.0 * Math.exp(-0.2 * Math.sqrt(0.5 * (x*x + y*y))) - Math.exp(0.5 * (Math.cos(2 * Math.PI * x) + Math.cos( 2 * Math.PI * y))) + Math.E + 20;
        return ackley;
    };

    this.start = function(){
        clearConsole();
        iter = 0;

        graphCand = [];
        graphBest = [];

        best = randomSolution();
        bestCandidate = JSON.parse(JSON.stringify(best));
        tabuList.push(best);

        for(let i = 0; i < _numberOfIteration; i++){
            iteration();

            if(cost(best) <= 0){
                break;
            }
            iter++;
        }
        pintToConsole("");
        pintToConsole("\n *** BEST SOLUTION! *** ");
        pintToConsole(JSON.stringify(best));
    };  

    let iteration = function(){ 
        var candidates = getNeighbors(bestCandidate);
        for(let i = 0; i < candidates.length; i++){           
            var hasNeighbor = tabuList.find(element =>{
                if(element.x == candidates[i].x && element.y == candidates[i].y) return true;
                return undefined;
            });  
            if(hasNeighbor == undefined && cost(candidates[i]) < cost(bestCandidate)){
                bestCandidate = JSON.parse(JSON.stringify(candidates[i]));
            }  
        }      

        var candidateCost = cost(bestCandidate);
        var bestCost = cost(best); 

        if(candidateCost < bestCost){
            best = JSON.parse(JSON.stringify(bestCandidate));
        }        

        graphCand.push(candidateCost);
        graphBest.push(bestCost);

        tabuList.push(bestCandidate);
        if(tabuList.length >= _maxSizeTabuList){
            tabuList.shift();
        }       
        pintToConsole("[ "+iter+" ]  CANDIDATE: "+candidateCost+"    BEST: "+bestCost);
    };

    let randomSolution = function(){
        //from -100 to 100
        var x = Math.floor(Math.random() * 200 - 100);
        var y = Math.floor(Math.random() * 200 - 100);

        return {x: x, y: y};
    };   
    let getNeighbors = function(candidate){        
        var candidates = [];
        for(var i = 0; i < _maxSizeTabuList; i++){
            var cand = JSON.parse(JSON.stringify(candidate));
            if(utils.random() > 0.5){
                cand.x = utils.randomIntMinMax(_minSpace, _maxSpace);
            }else{
                cand.y = utils.randomIntMinMax(_minSpace, _maxSpace);
            }
            candidates.push(cand);
         }
        return candidates;
    };
    let clearConsole = function(){
        var txtArea = document.getElementById("console");
        txtArea.innerHTML ="";
    };
    let pintToConsole = function(text){
        var txtArea = document.getElementById("console");
        txtArea.innerHTML += text + "\n";
    };

    Object.defineProperty(this, "iter",{
        get: function(){ return iter;}
    });
    Object.defineProperty(this, "graphCand",{
        get: function(){ return graphCand;}
    });
    Object.defineProperty(this, "graphBest",{
        get: function(){ return graphBest;}
    });
    Object.defineProperty(this, "_maxSizeTabuList", {
        get: function(){ return _maxSizeTabuList; },
        set: function(value){ _maxSizeTabuList = value; }
    });
    Object.defineProperty(this, "_numberOfIteration", {
        get: function(){ return _numberOfIteration; },
        set: function(value){ _numberOfIteration = value; }
    });
}