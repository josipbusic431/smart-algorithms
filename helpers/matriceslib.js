function Matrix(data){
    this.matrix = data;

    this.createDimesionalMatrix = function (x, y, from, to) {
        let matrix = [];
        for (var i = 0; i < x; i++) {
            let column = [];
            for (var j = 0; j < y; j++) {
                column.push(utils.randomIntMinMax(from, to));
            }
            matrix.push(column);
        }
        return matrix;
    };

    this.createScalarMatrix = function (x, y, value) {
        let newMatrix = [];
        for (var i = 0; i < x; i++) {
            let column = [];
            for (var j = 0; j < y; j++) {
                if (i == j) {
                    column.push(value);
                } else {
                    column.push(0);
                }
            }
            newMatrix.push(column);
        }
        return newMatrix;        
    };

    this.createIdentityMatrix = function (x, y) {
        let newMatrix = [];
        for (var i = 0; i < x; i++) {
            let column = [];
            for (var j = 0; j < y; j++) {
                if (i == j) {
                    column.push(1);
                } else {
                    column.push(0);
                }
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.createZeroMatrix = function (x, y) {
        return this.createScalarMatrix(x, y, 0);
    };

    this.equalTo = function (matrixA) {
        for (let i = 0; i < matrixA.matrix.length; i++) {
            for (let j = 0; j < matrixA[0].length; j++) {
                if (matrixA[i][j] != this.matrix[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };

    this.equalDimesion = function (matrixA) {
        if (matrixA.length == this.matrix.length && matrixA[0].length == this.matrix[0].length) {
            return true;
        }
        return false;
    };

    this.add = function (matrixA) {
        if (!this.equalDimesion(matrixA, this.matrix)) {
            return "Matrices are not the same dimesnions!"
        }

        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                column.push(matrixA[i][j] + matrixB[i][j]);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.sub = function (matrixA) {
        if (!this.equalDimesion(matrixA, this.matrix)) {
            return "Matrices are not the same dimesnions!"
        }

        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                column.push(matrixA[i][j] - this.matrix[i][j]);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.dot = function (matrixA) {
        if (matrixA[0].length != this.matrix.length) {
            return "matrices cannot be mutipled!";
        }

        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            var a1 = getRow(matrixA, i, matrixA[0].length);
            for (let k = 0; k < this.matrix[0].length; k++) {
                var product = 0;
                var a2 = getColumn(this.matrix, k, this.matrix.length);
                for (let j = 0; j < a1.length; j++) {
                    product += (a1[j] * a2[j]);
                }
                column.push(product);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.dot_scalar = function (value) {
        let newMatrix = [];
        for (let i = 0; i < this.matrix.length; i++) {
            let column = [];
            for (let j = 0; j < this.matrix[0].length; j++) {
                column.push(this.matrix[i][j] * value);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.div = function (matrixA) {
        if (matrixA[0].length != this.matrix.length) {
            return "matrices cannot be mutipled!";
        }

        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            var a1 = getRow(matrixA, i, matrixA[0].length);
            for (let k = 0; k < this.matrix[0].length; k++) {
                var product = 0;
                var a2 = getColumn(this.matrix, k, this.matrix.length);
                for (let j = 0; j < a1.length; j++) {
                    product += (a1[j] / a2[j]);
                }
                column.push(product);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.div_scalar = function (value) {
        let newMatrix = [];
        for (let i = 0; i < this.matrix.length; i++) {
            let column = [];
            for (let j = 0; j < this.matrix[0].length; j++) {
                column.push(this.matrix[i][j] / value);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.sum = function(isSquare){       
        var sum = 0;
        for (var i = 0; i < this.matrix.length; i++) {
            for (var j = 0; j < this.matrix[0].length; j++) {
                if(!isSquare) sum += this.matrix[i][j];
                else sum += Math.pow(this.matrix[i][j], 2);
            }
        }
        return sum;
    };

    this.squared = function(){
        let newMatrix = [];
        for (var i = 0; i < this.matrix.length; i++) {
            let column = [];
            for (var j = 0; j < this.matrix[0].length; j++) {
                column.push(Math.pow(this.matrix[i][j],2));
            }
            newMatrix.push(column);
        }        
        this.matrix = newMatrix;
    };

    let getRow = function (matrix, row, size) {
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(matrix[row][i]);
        }
        return arr;
    };

    let getColumn = function (matrix, column, size) {
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(matrix[i][column]);
        }
        return arr;
    };

    

};