
var cradle = require("cradle")
, util = require("util")
, fs = require("fs");

var connection = new(cradle.Connection)("localhost", 6660);
var db = connection.database('airports');
var ids = new Array();
var counter = 0;
var log = fs.createWriteStream('ap.json', {'flags': 'a'});
var log2 = fs.createWriteStream('ap.json', {'flags': 'w'});
log2.write("");
log.write('{"data":[');
db.all(function(err, doc) {
for( var i = 0; i < doc.length; i++){

	db.get(doc[i].id, function(err, el){
	var row = new String(el);
	if (counter < doc.length-1)log.write(row + ",\n");
	else log.write(row);
counter++;
	if(counter == doc.length) log.write("]}");
	});
}
});
