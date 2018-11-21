var fs = require("fs");

var buf = (fs.readFileSync(process.argv[2]));

// var count = 0;
// for (var i=0; i<buf.length; i++){
//     if(buf[i] == 10)
//         ++count; 
// }
// console.log(count);

//          OR

var lines = buf.toString().split('\n').length-1;
console.log(lines);