// Baby Steps : My First I/O!

// The fs module from Node core library is 
// required to perform a filesystem operation 
var fs = require('fs');

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);



// create variable from passed in argument(filename)
//var lines = fs.readFileSync(process.argv[2]);

// convert to string, split at new lines and 
// calculate number of lines by taking length minus 1
//lines = lines.toString().split('\n').length - 1;

// return the answer to the console.
//console.log(lines);

