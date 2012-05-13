m = function() {
	emit(this.type, 1);
};

r = function(key, values) {
	var result = 0;
	values.forEach(function(count) {
		result += count;
	});
	return result;
};	 

res = db.airports.mapReduce(m, r, {out: "air_mr"});
printjson(res);
