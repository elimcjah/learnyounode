// Baby Steps : My First I/O!

// The fs module from Node core library is 
// required to perform a filesystem operation 
var fs = require('fs');

// create variable from passed in argument(filename)
var lines = fs.readFileSync(process.argv[2]);

// convert to string, split at new lines and 
// calculate number of lines by taking length minus 1
lines = lines.toString().split('\n').length - 1;

// return the answer to the console.
console.log(lines);

