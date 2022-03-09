function ChaosGame(canvasControl){
    let _canvasControl = canvasControl;
    
    let _points = [];        

    this.start = function(){
        var canvas = document.getElementById(_canvasControl);
        var ctx = canvas.getContext("2d");      

        //set 3 cirlces
        _points.push({x:canvas.width/2, y:20 });
        _points.push({x:10, y:canvas.height-10 });
        _points.push({x:canvas.width-10, y:canvas.height-10 });

        //draw 3 circles and one random circle
        draw(ctx, _points[0]);
        draw(ctx, _points[1]);
        draw(ctx, _points[2]); 

        let stack = [];
        stack.push(randomPoint(_points[0], _points[1]));
        //let randPoint =  randomPoint(_points[0], _points[1]);    
        //draw(ctx, randPoint);

        for(let i = 0; i < 1000; i++){
                       
            let point = stack.pop();
            draw(ctx, point);

            let randIndex = randomIndex(_points.length);
            let main = _points[randIndex];            
            let newPoint = calcNewPoint(main, point);
            stack.push(newPoint);    
            debugger;         
        }        
    };

    let draw = function(ctx, point){
        ctx.beginPath();

        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#00d1b2';
        ctx.lineWidth = 0;

        ctx.fill();;
    };

    let randomPoint = function(point1, point2){
        let x = Math.random()*point1.x + Math.random()*point2.x;
        let y = Math.random()*point1.y + Math.random()*point2.y;

        return {x,y};
    };

    let randomIndex = function(max){
        return utils.randomIntMax(max);
    };

    let calcNewPoint = function(point1,  point2){
        let x = 0;
        let y = 0;

        let distance =  Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));

        if(point1.x > point2.x){
            x = point1.x - (distance/2);
        }else{
            x = point1.x + (distance/2);
        }
        if(point1.y > point2.y){
            x = point1.y - (distance/2);
        }else{
            x = point1.y + (distance/2);
        }
         return {x, y};
    };

    

};
