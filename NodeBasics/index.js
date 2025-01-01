// In rust -> package.json file is cargo.toml

function sum( a , b ){
    return a + b;
}
console.log("Sum is: " + sum(91,9));

// use node index.js for run index.js file.
// use npm run start to run index.js (go package.json file then go to "scripts" section and  add "start": "node index.js") 


// {
//     "name": "nodebasics",
//     "version": "1.0.0", 
//     "main": "index.js",
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1",
//       "start": "node index.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "description": ""
//   }
// "name" -> Name of your website/app/library
// "version" -> Current Version
// "main" -> Entrypoint
// "scripts" -> Dev specified scripts
// keywords , author , license , description they are just meta data

const chalk = require("chalk");
console.log(chalk);
