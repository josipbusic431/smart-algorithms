function MazeGenerator(dimension, width){

    const _dimension = dimension;
    const _width = width;
    
    this.draw = function(){
        let canvas = document.getElementById("mazeCanvas");
        canvas.setAttribute("width", _width);
        canvas.setAttribute("height", _width);

        //fill the background
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'white';

        
    };

}