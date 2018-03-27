// const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err) {
    return console.log('unable to connect to MongoDB');
}

console.log('Connected to mongoDB');





// // DeleteMany
// db.collection('Users').deleteMany({name: 'sirisha'}).then((docs) => {
//
// console.log(docs);
//
// }, (err) => {
//     console.log('error in delete');
// });


// DeleteOne
db.collection('Users').findOneAndDelete({_id: new ObjectID('5ab9148dcebeb307e32fb81b')}).then((docs) => {

console.log(docs);

}, (err) => {
    console.log('error in delete');
});


db.close();
});
