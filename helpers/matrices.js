function Matrix() {
    this.matrix = [];

    this.dimesionalMatrix = function (x, y, from, to) {
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

    this.squareMatrix = function (x, from, to) {
        return this.dimesionalMatrix(x, x, from, to);
    };

    this.scalarMatrix = function (x, y, value) {
        let matrix = [];
        for (var i = 0; i < x; i++) {
            let column = [];
            for (var j = 0; j < y; j++) {
                if (i == j) {
                    column.push(value);
                } else {
                    column.push(0);
                }
            }
            matrix.push(column);
        }
        return matrix;
    };

    this.identityMatrix = function (x, y) {
        let matrix = [];
        for (var i = 0; i < x; i++) {
            let column = [];
            for (var j = 0; j < y; j++) {
                if (i == j) {
                    column.push(1);
                } else {
                    column.push(0);
                }
            }
            matrix.push(column);
        }
        return matrix;
    };

    this.zeroMatrix = function (x, y) {
        return this.scalarMatrix(x, y, 0);
    };

    this.equalMatrices = function (matrixA, matrixB) {
        for (let i = 0; i < matrixA.matrix.length; i++) {
            for (let j = 0; j < matrixA[0].length; j++) {
                if (matrixA[i][j] != matrixB[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };

    this.equalDimesion = function (matrixA, matrixB) {
        if (matrixA.length == matrixB.length && matrixA[0].length == matrixB[0].length) {
            return true;
        }
        return false;
    };

    this.addMatrices = function (matrixA, matrixB) {
        if (this.equalDimesion(matrixA, matrixB)) {
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

    this.subMatrices = function (matrixA, matrixB) {
        if (this.equalDimesion(matrixA, matrixB)) {
            return "Matrices are not the same dimesnions!"
        }

        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                column.push(matrixA[i][j] - matrixB[i][j]);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.multMatrices = function (matrixA, matrixB) {        
        if (matrixA[0].length != matrixB.length) {
            return "matrices cannot be mutipled!";
        }

        let newMatrix = [];
        while(newMatrix.length < matrixA.length) {                      
            for (let i = 0; i < matrixA[0].length; i++) {
                let product = 0;
                let column = []; 
                for (let k = 0; k < matrixB[0].length; k++) {
                    for (let j = 0; j < matrixB.length; j++) {
                        product += matrixA[i][j] * matrixB[j][k];
                    }
                    column.push(product);
                } 
                newMatrix.push(column);                           
            }           
        }
        return newMatrix;
    };

    this.scalarMultiple = function (matrixA, value) {
        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                column.push(matrixA[i][j] * value);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };

    this.scalaDivide = function (matrixA, value) {
        let newMatrix = [];
        for (let i = 0; i < matrixA.length; i++) {
            let column = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                column.push(matrixA[i][j] / value);
            }
            newMatrix.push(column);
        }
        return newMatrix;
    };


};