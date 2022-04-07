/**
 * 2-opt algorithm
 */
function TwoOptLib(data){
    const _data = data;
    let iteration = 0;
    let best = [];
    let bestDistance = 100000000;
    let candDistances = [];
    let bestDistances = [];
    let candidateRoute = [];
    let bestRoute = [];
    let improvisation = 0;

    this.execute = function(){
        let finish = false;

        best = JSON.parse(JSON.stringify(_data));
        bestDistance = this.calculateDistance(best);

        while (!finish) {
            finish = true; 
            for (let i = 0; i <= _data.length - 1; i++) {
                for (let k = i + 1; k < _data.length; k++) {   
                    let route = alg.opt2swap(JSON.parse(JSON.stringify(best)), i, k);
                    let distance = alg.calculateDistance(route);

                    if (distance < bestDistance) {
                        best = JSON.parse(JSON.stringify(route));
                        bestDistance = distance;                           
                        finish = false;                            
                    }                       
                    candDistances.push(distance);
                    bestDistances.push(bestDistance);                        
                    task(best);                  
                }
                iteration++;
            }
            improvisation++;
        }
    };

    this.calculateDistance = function (data) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            var delta_x = 0;
            var delta_y = 0;
            if (i + 1 >= data.length) {
                delta_x = Math.pow(data[i].x - data[0].x, 2);
                delta_y = Math.pow(data[i].y - data[0].y, 2);
                sum += delta_x + delta_y;
            } else {
                delta_x = Math.pow(data[i].x - data[i + 1].x, 2);
                delta_y = Math.pow(data[i].y - data[i + 1].y, 2);
                sum += delta_x + delta_y;
            }
        }
        return Math.sqrt(sum);
    };

    this.opt2swap = function (route, i, k) {
        var r = [];

        for (let z = 0; z <= i; z++) {
            r.push(route[z]);
        };
        for (let z = k; z > i; z--) {
            r.push(route[z]);
        };
        for (let z = k + 1; z < route.length; z++) {
            r.push(route[z]);
        };

        if (r.indexOf(undefined) != -1) {
            debugger;
        }
        candidateRoute.push(r);
        return r;
    };

    Object.defineProperty(this, "best", {
        get: function () { return best; }
    });
    Object.defineProperty(this, "candDistances", {
        get: function () { return candDistances; }
    });
    Object.defineProperty(this, "iteration", {
        get: function () { return iteration; }
    });
    Object.defineProperty(this, "bestDistance", {
        get: function () { return bestDistance; }
    });
    Object.defineProperty(this, "bestDistances", {
        get: function () { return bestDistances; }
    });
    Object.defineProperty(this, "candidateRoute", {
        get: function () { return candidateRoute; }
    });
    Object.defineProperty(this, "bestRoute", {
        get: function () { return bestRoute; }
    });
    Object.defineProperty(this, "_data", {
        get: function () { return _data; },
        set: function (value) { _data = value; }
    });
    Object.defineProperty(this, "improvisation", {
        get: function () { return improvisation; }      
    });


};