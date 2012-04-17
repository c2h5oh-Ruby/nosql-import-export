var sys = require('util'),
    rest = require('restler'),
    fs = require('fs');

var fileName = "ap.json";
var elasticHost = "http://127.0.0.1:9200";

var input = fs.readFileSync(fileName, "utf-8");
var ap = JSON.parse(input);

function func(data) {
for(var i = 0; i < data.data.length; i++){
  var id = data.data[i]._id;
console.log(id);
 rest.postJson(elasticHost + '/dawcio/airports/' + id, data.data[i]).on('complete', function(data, response) {
    sys.puts("Dodalem dokument" + id);
  });
}
}
func(ap);
