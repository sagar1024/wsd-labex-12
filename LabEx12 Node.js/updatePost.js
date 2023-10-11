const fs = require('fs');
const path = require('path');

//Append content to file
fs.appendFile(
    path.join(__dirname,'posts','blogPost.txt'),
    '\n More data',
    (err) =>{
        if(err){
            console.log(err);
            return;
        }
       console.log('File content updated!');
    }
);