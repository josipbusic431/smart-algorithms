function Distribution(numbers){
    this.randomCounts = [];
    this.numbers = numbers;

    this.generate = function(){
        for(let i = 0; i < this.numbers; i++){
            this.randomCounts.push(0)
        }        
    };

    this.draw = function(repetition){
        this.generate();

        for(let i = 0; i < repetition; i++){
            var index = utils.randomIntMax(this.numbers);  
            this.randomCounts[index]++;
        }
       
        // let w = width/this.randomCounts.length;
        // for(let x = 0; x < this.randomCounts.length; x++){
        //     ctx.beginPath();
        //     ctx.fillStyle = 'black';
        //     ctx.fillRect(x * w, height - this.randomCounts[x], w - 1, this.randomCounts[x]);
        // }        
    };

};