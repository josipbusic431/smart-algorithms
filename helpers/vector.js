function Vector(vector) {
    this.vector = vector;

    this.scalar = function(operator, scalarValue) {
        let newVector = [];
        for (var i = 0; i < this.vector.length; i++) {
            if (operator == "+") {
                newVector.push(scalarValue + this.vector[i]);
            }
            else if (operator == "-") {
                newVector.push(this.vector[i] - scalarValue);
            }
            else if (operator == "*") {
                newVector.push(this.vector[i] * scalarValue);
            }
            else if (operator == "/") {
                newVector.push(this.vector[i] / scalarValue);
            }
        }
        return newVector;
    };
};