function NeuralNetwork(input_nodes, output_nodes, hidden_nodes, batchSize){
    this.input_nodes = input_nodes;
    this.output_nodes = output_nodes;
    this.hidden_nodes = hidden_nodes;
    this.batchSize = batchSize;

    this.input = [];
    this.output = [];
    this.hidden = [];

    this.setData = function(a_size, b_size){
        let data = [];
        for(var i = 0; i < a_size; i++){
            let arr = [];
            for(var j = 0; j < b_size; j++){
                arr.push(Math.random());
            }
            data.push(arr);
        }
        return data;
    };
   
    this.relu = function(matrix){
        for(var arr of matrix){
            for(var i = 0; i < arr.length; i++){
                if(arr[i] < 0) arr[i] = 0;
            }
        }
        return matrix;
    };


};