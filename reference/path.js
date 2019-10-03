const path = require('path');

// filename
console.log(__filename);

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, 'test', 'index.html'));