const fs = require('fs');

fs.writeFileSync('app.txt',"this is added from the node.js");
fs.appendFileSync('app.txt', '\n\nthis information is appended using the file append in node.js' )