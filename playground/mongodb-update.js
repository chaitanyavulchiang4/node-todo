// const MongoClient = require('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err) {
    return console.log('unable to connect to MongoDB');
}

console.log('Connected to mongoDB');



db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ab9181d6745d8f9af92fc52')},

{
    $set:{
        name: 'thrymr'
    },
    $inc: {
        age: 100
    }
}).then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));

}, (e) => {
    console.log('error', e);
})


db.close();
});
