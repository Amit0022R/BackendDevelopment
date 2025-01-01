// const fs = require("fs")

// function main(filename) {
//     fs.readFile(filename , "utf-8", function(err , data) {
        // how to count number of words in data
         // 2 words -> 1 space
//         let total = 0;
//         for(let i=0; i<data.length; i++){
//             if(data[i] === " "){
//                 total++;
//             }
//         }
//         console.log(total + 1);
        
//     })
// }
// main("a.txt");
// main(process.argv[2]);

// -------------------------------------------------------\\


const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = 0;
        for( let i=0; i<data.length; i++ ) {
            if( data[i] === " " ) {
                words++;
            } 
        }
        console.log(`There are ${words + 1} words in ${file}`);
      }
    });
  });

program.parse();



// -------------------------------------------------------\\


// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of words in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split(' ').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();