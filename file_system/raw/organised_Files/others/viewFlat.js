
let fs=require("fs");
/* let content=fs.readFileSync("viewFlat.js");
console.log("con"+content); */
//var user = require('./organise.js');
//console.log(user.organise());

function isFile(dirPath)
{
    return fs.lstatSync(dirPath).isFile();
}
function viewContents(dirPath)
{
    return fs.readdirSync(dirPath);
}
function isDirectory(dirPath)
{
    return fs.lstatSync(dirPath).isDirectory();  
}

function viewTree(dirPath,printPath)
{
    if(isFile(dirPath))
    {   
        let last=dirPath.split("\\");
        let lastPath=last[last.length-1];
        console.log(printPath+lastPath);
    }
    else{
        let last=dirPath.split("\\");
        let lastPath=last[last.length-1];
        console.log(printPath+lastPath);
        let contents=viewContents(dirPath);
        for(let i =0;i<contents.length;i++)
        {
            viewTree(dirPath+"\\"+contents[i],printPath+" - ");
        }
    }


}

let input=process.argv.slice(2);
let printPath=input[0].split("\\");

viewTree(input[0],"");
