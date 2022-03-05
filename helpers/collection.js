function Collection(){
	let collection = [];
	
	this.has = function(element){
		return (collection.indexOf(element) !== -1);
	};

	this.add = function(element){
		collection.push(element);
	};

	this.index = function(element){
		if(this.has(element)){
			return collection.indexOf(element);
		}
		return undefined;
	};

	this.remove = function(){
		if(this.has(element)){
			var index = collection.indexOf(element);
			collection.splice(index, 1);
		}
	};

	this.size = function(){
		return collection.length;
	};
	this.clear = function(){
		collection = [];
	};

	Object.defineProperty(this, "collection",{
		get: function(){ return collection; }
	});

}