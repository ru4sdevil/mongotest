let mc = require("mongodb").MongoClient;
let url = "mongodb://localhost";

mc.connect(url, function (err, client) {
	if (err) console.log(err.stack);
	var human = {name: "Step", age: 17};
	let db = client.db('sandbox');
	db.collection("humans").insertOne(human,
		function (error, response){
			if (error) console.log("error insert");
			else console.log("insert record", response.ops[0]);
		});
	client.close();
});