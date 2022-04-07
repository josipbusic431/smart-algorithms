function Plotter(id, plot_type){
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    const _plotType = plot_type;

    this.show = function(labels, real_data, real_data_label, pred_data, pred_data_label){
        let dataColor1 = utils.getColor(0);
        let data1 = new Dataset(real_data_label, real_data, dataColor1, dataColor1);

        let dataColor2 = utils.getColor(1);
        let data2 = new Dataset(pred_data_label, pred_data, dataColor2, dataColor2);

        var config = new MyChartConfig(_plotType, labels, [data1.json(), data2.json()]);

        if (window.myChart != null) {
            try {
                window.myChart.destroy();
            } catch (error) { }
        }
        window.myChart = new Chart(this.ctx, config.config());
        window.myChart.render();
    };    
};

function MyChartConfig(type, labels, datasets){
    let _type = type;
    let _labels = labels;
    let _datasets = datasets;

    this.data = function(){
        return {
            labels: _labels,
            datasets: _datasets
        };
    };
    this.config = function(){
         return {
            type: _type,
            data: this.data()
         };
    };
    Object.defineProperty(this, "labels",{
        get: function(){ return labels; },
        set: function(vaule){ labels = value; }
    });
};

function Dataset(label, data, borderColor, backgroundColor){
    const _label = label;
    const _data = data;
    const _borderColor = borderColor;
    const _backgroundColor = backgroundColor;

    this.json = function(){
        return {
            label: _label,
            data: _data,
            borderColor: _borderColor,
            backgroundColor: _backgroundColor,
            tension: 0.4
        };
    };
};