function TwoOpt(data) {
    //data
    const _data = data;

    //algoritham params   
    let iter = 0;
    let best = [];

    //calcDistance    
    let bestDistance = 0;

    //graph properties
    let candDistances = [];
    let bestDistances = [];
    let candidateRoute = [];
    let bestRoute = [];

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
    // this.start = function () {
    //     clearConsole();

    //     best = JSON.parse(JSON.stringify(_data));
    //     bestDistance = calculateDistance(best);
    //     let isFinised = true;

    //     while (!isFinised) {
    //         for (let i = 0; i <= data.length - 1; i++) {
    //             isFinised = true;
    //             for (let k = i + 1; k <= data.length - 1; k++) {
    //                 let route = opt2swap(JSON.parse(JSON.stringify(best)), i, k);
    //                 distance = calculateDistance(route);

    //                 if (distance < bestDistance) {
    //                     best = JSON.parse(JSON.stringify(route));
    //                     bestDistance = distance;
    //                     isFinised = false;
    //                 }
    //                 bestRoute.push(best);
    //                 candDistances.push(distance);
    //                 bestDistances.push(bestDistance);
    //                 iter++;

    //                 printToConsole("DISTANCE: " + distance + " BEST: " + bestDistance);
    //             }
    //         }
    //     }

    //     printToConsole("");
    //     printToConsole("\n *** BEST SOLUTION! *** ");      
    //     printToConsole("DINSTANCE: " + bestDistance);
    //     printToConsole("CONVERGE AFTER {" + iter + "} ITERATIONS.");
    // };
    this.clearConsole = function () {
        var txtArea = document.getElementById("console");
        txtArea.innerHTML = "";
    };
    this.printToConsole = function (text) {
        var txtArea = document.getElementById("console");
        txtArea.innerHTML += text + "\n";
    };

    //getter/setter
    Object.defineProperty(this, "best", {
        get: function () { return best; }
    });
    Object.defineProperty(this, "candDistances", {
        get: function () { return candDistances; }
    });
    Object.defineProperty(this, "iter", {
        get: function () { return iter; }
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



};