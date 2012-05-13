var mongodb = require('mongodb'),
fs = require('fs');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var fileName = "ap.json";
var input = fs.readFileSync(fileName, "utf-8");
var ap = JSON.parse(input);
new mongodb.Db('test', server, {}).open(function (error, client) {
  var collection = new mongodb.Collection(client, 'airports');
	if(error) console.log(error);
	for(var i = 0; i < ap.data.length; i++){
	console.log(ap.data[i]);

  collection.insert(ap.data[i], {safe:true},
                    function(err, objects) {
  });
}
});

