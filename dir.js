const fs = require('fs')

let level = 0;
readAndPrint('./')

const show = (level, text) => console.log(`${Array(level).fill(' ').join('')}${text}`);

function readAndPrint(path) {
        fs.readdir(path, {
            withFileTypes: true,
        }, (error, extracted) => {
            if (error) {
                return;
            }
            printExtracted(level,path,extracted);
            level = level+3
        }
        );
    }

function printExtracted(level,path,extracted){
    extracted.forEach(file=>{
        try{
            if(file.isDirectory){
                show(level,file.name)
                
                readAndPrint(appendFile(path,file.name))
            }
            else{
                show(level,file.name)
                
            }
        }
        catch(e){
            console.error(e)
        }
        
    })
}

function appendFile(oldFile,newFile){
    newFile = `${oldFile}/${newFile}`
    return newFile
}