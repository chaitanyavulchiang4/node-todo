const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err) {
    return console.log('unable to connect to MongoDB');
}

console.log('Connected to mongoDB');
// db.collection('Todos').insertOne({
//         text: 'some thing to do',
//         completed:false
//     }, (err, result) => {
//         if(err) {
//             return console.log('unable to add to MongoDB');
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//
//
//
// });

db.collection('Users').insertOne({
        name: 'sirisha',
        age: 25,
        location: 'manikonda'
    }, (err, result) => {
        if(err) {
            return console.log('unable to add to MongoDB');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));



});


db.close();
});
