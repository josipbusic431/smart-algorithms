function GeneticAlgorithmAllOnes(populationSize, mutationRate, crossoverRate, elitismCount){
    const _populationSize = populationSize;
    const _mutationRate = mutationRate;
    const _crossoverRate = crossoverRate;
    const _elitismCount = elitismCount;

    this.initPopulation = function(chromosomeLength){
        const population = new Population(_populationSize, chromosomeLength);
        return population;
    };

    this.calcFitness = function(individual){
        let correctGenes = 0;
        for(const indv of individual.chromosome){
            if(indv == 1){
                correctGenes++;
            }
        }
        let fitness = correctGenes / individual.chromosome.length;
        individual.fitness = fitness;
        return fitness;
    };

    this.evalPopulation = function(popl){
        let fitness = 0;
        for(let individual of popl.population){
            fitness += individual.fitness;
        }
        popl.fitness = fitness;
    };
}

function Population(populationSize, chromosomeLength){
    const _populationSize = populationSize;
    const _population = [];
    const _populationFitness = -1;
    const _chromosomeLength = chromosomeLength;

    this.contrustor2 = function(){
        for(let i = 0; i < _populationSize; i++){
            const indv = new Individual(_chromosomeLength);
            this._population.push(indv);
        }
    }

    this.getFittest = function(offset){
        for(const i = 0; i < _population.length; i++){
            const finish = false;
            for(const j = 0; j < _population.length; j++){
                if(_population[i].fitness > _population[j].fitness){
                    let tmp = _population[i];
                    _population[i] = _population[j];
                    _population[j] = tmp;
                    
                    finish = false;
                }
            }
            
            if(finish){
                break;
            }
        }
        return _population[offset];
    }

    this.shuffle = function(){
        for(let i = _population.length - 1; i > 0; i--){
            let index = utils.randomIntMax(i + 1);
            let a = _population[index];
            _population[index] = _population[i];
            _population[i] = a;
        }
    };

    Object.defineProperty(this, "population", {
        get: function(){ return _population; }
    });
    Object.defineProperty(this, "populationFitness", {
        get: function(){ return _populationFitness; },
        set: function(value) { _populationFitness = value; }
    });
}

function Individual(chromosome){
    const _chromosome = chromosome;
    const _fitness = -1;

    this.contrustor2 = function(chromosomeLength){
        this.chromosome = [];
        for(let gene=0; gene < chromosomeLength; gene++){
            if(Math.random() > 0.5){
                this.chromosome[gene] = 1;
            } else {
                this.chromosome[gene] = 0;
            }
        }
    }

    this.printGenes = function(){
        const output = "";
        for(let gene of _chromosome){
            output += gene;
            console.log(gene);
        }
        return output;
    }

    Object.defineProperty(this, "chromosome", {
        get: function(){ return _chromosome; }
    });

    Object.defineProperty(this, "fitness", {
        get: function() { return _fitness; },
        set: function(value) { _fitness = value; }
    });
   
}