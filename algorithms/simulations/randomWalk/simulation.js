function Walker(){
    this.x;
    this.y;
    let stepSize = 5;       

    this.initPosition = function(width, height){
        this.x = width / 2;
        this.y = height / 2;
    };

    this.draw = function(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y, stepSize,stepSize);
    };

    this.step = function(){
        let stepX = utils.randomFloat(-1, 1); 
        let stepY = utils.randomFloat(-1, 1);

        this.x += stepX * stepSize;
        this.y += stepY * stepSize;       
    };
};

