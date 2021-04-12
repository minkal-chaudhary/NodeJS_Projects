let fs=require("fs");
var user = require('./organise.js');



let input=process.argv.slice(2);
let cmd=input[0];

switch(cmd){

    case "view":
        if(input[2]=="flat")
        {
        //console.log("flat command executed");
        
        let printPath=input[1].split("\\");

        viewFlat(input[1],printPath[printPath.length-1]);
        
        }
        else if(input[2]=="tree")
        {
            //console.log("tree view implemented");
            viewTree(input[1],"");
        }
        else{
            console.log("wrong view structure seek help");
        }
        break;

    case "organise":
        let pathdir=input[1];
        user.preparetoOrganise(pathdir);
        console.log("organise command exected");
        break;
    case "help":
        console.log(`List of all commands:
                      1.node mycli.js view <dirname> tree
                      2.node mycli.js view <dirname> flat
                      3.node mycli.js organise <dirname>
                      4.node mycli.js help`);
        break;

    default:
        console.log("wrong choice entered see help "); 
}




/* let content=fs.readFileSync("viewFlat.js");
console.log("con"+content); */


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

function viewFlat(dirPath,printPath)
{
    if(isFile(dirPath))
    {
        console.log(printPath);
    }
    else{
        console.log(printPath);
        let contents=viewContents(dirPath);
        for(let i =0;i<contents.length;i++)
        {
            viewFlat(dirPath+"\\"+contents[i],printPath+"\\"+contents[i]);
        }
    }


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

