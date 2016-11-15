
var total = 0;

total = process.argv.slice(2).map(Number).reduce(function (a,b){
    return a + b;
});



console.log(total);