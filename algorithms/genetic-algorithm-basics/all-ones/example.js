function Individual(size){
    this.size = size;
    this.chromosomes = [];
    this.fitness = -1;

    this.init = function(){        
        for(var i = 0; i < this.size; i++){
            if(Math.random() > 0.5) this.chromosomes.push("1");
            else this.chromosomes.push("0");
        }
    };

    this.print = function(){
        let output = "";
        for(let gen of this.chromosomes){
            output += gen;
        }
        return output;
    };
      
}

function Population(populationSize, genSize){
    this.population = new Array();
    this.size = populationSize;
    let _genSize = genSize;
    this.fitness = -1;

    this.init = function(){        
        for(var i = 0; i < this.size; i++){
            var indv = new Individual(_genSize);
            indv.init();
            this.population.push(indv);
        }
    };

    this.getFittest = function(offset){
        for(var i = 0; i < this.size; i++){
            var finish = true;
            for(var j = 0; j < this.size; j++){
                if(this.population[i].fitness > this.population[j].fitness){
                    var tmp = this.population[i];
                    this.population[i] = this.population[j];
                    this.population[j] = tmp;

                    finish = false;
                }
            }
            if(finish) break;
        }
        return this.population[offset];
    };

    this.shuffle = function(){
        for(var i = this.size - 1; i > 0; i--){
            var index = utils.randomIntMax(i + 1);
            var tmp = this.population[index];
            this.population[index] = this.population[i];
            this.population[i] = tmp;
        }
    };
}

function GeneticAlgorithmAllOnes(populationSize, genSize, mutationRate, crossoverRate, elitismCount){
    let _populationSize = populationSize;
    let _genSize = genSize;
    let _mutationRate = mutationRate;
    let _crossoverRate = crossoverRate;
    let _elitismCount = elitismCount;

    this.initPopulation = function(){
        var population = new Population(_populationSize, _genSize);
        population.init();
        return population;
    };

    let calcFitness = function(individual){
        var countGenes = 0;
        for(var gen of individual.chromosomes){
            if(gen === "1") countGenes++;
        }
        return countGenes / individual.chromosomes.length;
    };

    this.evalPopulation = function(population){
        var fitness = 0;
        for(var individual of population.population){
            individual.fitness = calcFitness(individual);
            fitness += individual.fitness;
        }
        population.fitness = fitness;
    };

    this.isTerminalConditionMet = function(population){
        for(var individual of population.population){
            if(individual.fitness == 1) return true;
        }
        return false;
    };

    this.printToConsole = function(text){
        var txtArea = document.getElementById("console");
        txtArea.innerHTML += text + "\n";
    };

    let select = function(population){
        var populationFitness = population.fitness;
        var rouletteWheelPosition = Math.random() * populationFitness;

        var spinWheel = 0;
        for(var individual of population.population){
            spinWheel += individual.fitness;
            if(spinWheel >= rouletteWheelPosition){
                return individual;
            }
        }
        return population.population[population.length - 1];
    };

    this.crossover = function(population){
        var newPopulation = new Population(_populationSize, _genSize);

        for(var i = 0; i < _populationSize; i++){
            var parent1 = population.getFittest(i);
            if(_crossoverRate > Math.random() && i > _elitismCount){
                var parent2 = select(population);

                for(let j = 0; j < parent1.chromosomes.length/2; j++){
                    var tmp = parent1.chromosomes[j];
                    parent1.chromosomes[j] = parent2.chromosomes[j];
                    parent2.chromosomes[j] = tmp;
                }
                newPopulation.population.push(parent2);
            }
            else {                
                newPopulation.population.push(parent1);
            }
        }
        return newPopulation;
    };

    this.mutation = function(population){
        for(var i = 0; i < population.size; i++){
            var individual = population.population[i];
            if(Math.random() < _mutationRate && i > _elitismCount){
                var index = Math.random() * (individual.size - 1);
                individual.chromosomes[index] = individual.chromosomes[index] == "0" ? "1" : "0";
            }
        }
    };

}