var fs = require('fs');
const path = require('path');
var fileList = [];

module.exports = function(dirName, extName, callback){
    fs.readdir(dirName, function (err, list) {
        if(err){
            return callback(err);
        }
        list = list.forEach(function (file) {
            if (path.extname(file) === '.' + extName)
                fileList.push(file);
        });
        callback(null, fileList);
    });
}


