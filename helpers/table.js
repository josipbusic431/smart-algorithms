function Table() {
    let tableId = "";
    let headerCollection = new Collection();
    let rowCollection = new Collection();   

    this.setTable = function (name) {
        tableId = document.getElementById(name);
    };
    this.addColumn = function (name) {
        headerCollection.add(name);
        drawTable();
    };
    this.addRow = function () {
        for (let i = 0; i < headerCollection.size(); i++) {
            rowCollection.add(Math.random() * 10);
        }
        drawTable();
    };
    this.clearTable = function() {
        headerCollection.clear();
        rowCollection.clear();

        drawTable();
    }
    this.knapsack = function(){
        
        headerCollection.add("Weight");
        headerCollection.add("Value");

        for(let i = 0; i < 20; i++){
            rowCollection.add(Math.random() * 10);
        }

        drawTable();
    }


    drawTable = function () {
        let thead = tableId.getElementsByTagName('thead')[0];

        //reset head
        thead.innerHTML = "";
        let tr = document.createElement("tr");

        for (let i = 0; i < headerCollection.size(); i++) {
            let th = document.createElement("th");
            th.innerHTML = headerCollection.collection[i];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tableId.appendChild(thead);

        //set rows
        var tbody = document.getElementsByTagName("tbody")[0];
        tbody.innerHTML = "";

        var count = rowCollection.size() / headerCollection.size();
        var counter = 0;

        for (let i = 0; i < count; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < headerCollection.size(); j++) {
                let td = document.createElement("td");
                td.innerHTML = rowCollection.collection[counter];
                tr.appendChild(td);
                counter++;
            }
            tbody.appendChild(tr);
        }
    };


    Object.defineProperty(this, "tableId", {
        get: function () { return tableId; }
    });

    Object.defineProperty(this, "rowCollection", {
        get: function () { return rowCollection; }
    });
}
// var tbl = new Table();
// tbl.setTable("table");