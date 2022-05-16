const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8081;

const host ='0.0.0.0';

app.use(bodyParser.urlencoded({extended: true}))

// MongoClient.connect(db.url, (err, database) =>{
//     if (err) return console.Console.log(err)
//     require('./app/routes')(app, database);
//     app.listen(port, () => {
//         console.log("We are live on " + port);
//     })
// })

MongoClient.connect(db.url, (err, client) => {
	if (err) return console.log(err)
	require('./app/routes')(app, client.db('employees'));
	app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
})