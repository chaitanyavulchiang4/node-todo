// const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err) {
    return console.log('unable to connect to MongoDB');
}

console.log('Connected to mongoDB');



db.collection('Users').find({_id: new ObjectID('5ab914454ab93807cc171731')}).toArray().then((docs) => {


console.log(JSON.stringify(docs, undefined, 2));

}, (e) => {
console.log('no way');
});







db.close();
});
