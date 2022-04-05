function Plotter(id){

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;

};