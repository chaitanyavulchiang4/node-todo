
var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb')
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todos.js');
var {User} = require('./models/user.js');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/todos', (req, res)=> {

var todo = new Todo({
    text: req.body.text
});

todo.save().then((doc) => {
    console.log(doc);
    res.send(doc);
}, (e) => {
    res.send(e);

});


});


// GET

app.get('/todos', (req, res) => {
    Todo.find().then((docs) => {
        res.send(docs);

    }, (e) => {
        console.log('error', e);
    });
});


// GET Id

app.get('/todos/:id', (req, res) => {
var id = req.params.id;

if(!ObjectID.isValid(id)) {
    return res.status(404).send();
}

Todo.findById(id).then((todo) => {

if(!todo) {
    return res.status(404).send();

}

res.send({todo});

}).catch((e) => {
    return res.status(400).send();

});

});


// Delete

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send;
    }


Todo.findByIdAndRemove(id).then((todo) => {

    if(!todo) {
        return res.status(404).send();

    }

    res.send({todo});
}).catch((e) => {
    return res.status(404).send();

});

});



app.listen(port, () => {
    console.log('server started in', port);
})
