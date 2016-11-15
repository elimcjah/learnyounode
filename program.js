var fs = require('fs');

// create variable from passed in argument(filename)
fs.readFile(process.argv[2], 'utf8', function(err, content){
   if (err) {
    return console.log(err)
  }

  console.log(content.split('\n').length -1);
});