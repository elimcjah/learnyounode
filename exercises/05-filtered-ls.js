var fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    if(err){
    return err;
    }
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  });
});
