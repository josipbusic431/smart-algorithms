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