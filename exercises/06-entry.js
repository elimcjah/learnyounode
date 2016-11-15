var mod = require('./module');

var callback = function(err, list){
    if(err){
        return callback(err);
    }
    list.forEach(function(elem){
        console.log(elem);
    });
}

mod(process.argv[2], process.argv[3], callback);
