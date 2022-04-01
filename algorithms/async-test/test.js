function TestClass(){
    var console = document.getElementById("console");

    this.start = async function(){
        var iteration = 0;
        while(true){
            
            this.print();
            await new Promise(resolve => setTimeout(resolve, 10));
        };
        
    };

    this.print = function(){        
        console.innerText += "\n"+Math.random();
    };
};