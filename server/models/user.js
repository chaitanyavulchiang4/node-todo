

var mongoose = require('mongoose');


var User = mongoose.model('User', {

    email: {
        type: String,
        require: true
    }
});


module.exports={User};
