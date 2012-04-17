var cradle = require("cradle")
, util = require("util")
, fs = require("fs");

var filename = "airports2.json";
var i = 0;
var connection = new(cradle.Connection)("localhost", 6660);
var db = connection.database('airports');

var couchimport = function(filename) {
  var data = fs.readFileSync(filename, "utf-8");
  var airports = JSON.parse(data);

  for (var p in airports.data) {
	var port = airports.data[p];
      db.save(port.id, port, function(er, ok) {
        if (er) {
          util.puts("Error: " + er);
          return;
		}     
	  });	
}
};

couchimport(filename);
