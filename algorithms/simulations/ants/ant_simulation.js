//set the canvas
var c = document.getElementById("myCanvas");
var w = c.width = window.innerWidth/1.2,
    h = c.height = window.innerHeight/2;
   
var ctx = c.getContext("2d");
ctx.fillStyle = "#00d1b2";
ctx.fillRect( 0, 0, w, h );



function Ant(){
    this.direction;
    this.speed;

    this.randomState = function(){

    };

    this.updateSpeed = function(speed){

    };

    this.updateDirection = function(){

    };
}