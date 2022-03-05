function Utils(){
    const colors = ["#669EC5", "#DED4C1", "#DE8B57", "#58CE3D", "#4082D4", "#DFD4CA", "#3F404C", "#FE6726"];

    this.getRandomColor = function(){
        return colors[parseInt(Math.random() * (colors.length - 1))];
    };
    this.getColor = function(index){
        return colors[index];
    };

    this.random =  function(){
        return Math.random();
    };
    this.randomIntMax = function(max){
        return Math.floor(this.random() * max);
    };
    this.randomIntMinMax = function(min,max){
        return Math.floor(this.random() * (max - min +1)) + min;
    };
}
let utils = new Utils();