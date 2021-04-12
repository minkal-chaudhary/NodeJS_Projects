let fs =require("fs");
let path =require("path");
let types={
    media:["mp4","mkv","mp3",'cda','mpa','ogg','wav','wma','wpl'],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz','deb','rpm','zip','pkg'],
    documents:['docx','doc','pdf','xls','xlsx','ods','odt','txt','odf'],
    app:['exe','pkg','deb','dmg'],
    others:[]
}

let input=process.argv.slice(2);
let dirPath=input[0];
let orgfile=path.join(dirPath,"organised_Files");
//fs.mkdirSync(orgfile);
createDir(orgfile);

function createDir(orgPath)
{
   if(!fs.existsSync(orgPath))
      {fs.mkdirSync(orgPath);
      } 
}

for(let key in types)
{
  let newpath=path.join(orgfile,key);
  //fs.mkdirSync(newpath);
  createDir(newpath);
}
orgainse(dirPath,dirPath);




//how to copy one file
function orgainse(dirPath,orgPath)
{
    if(isFile(dirPath))
    {
        //copy from src to dest
        let fName=dirPath.split("\\");
        let fileName=fName[fName.length-1];
        let last=dirPath.split(".");
        let lastExt=last[last.length-1];
        copyFileToOrganised(dirPath,lastExt,orgPath,fileName);
    }else{
        let contents=viewContents(dirPath);
        for(let i=0;i<contents.length;i++)
        {
            orgainse(dirPath+'\\'+contents[i],orgPath);
        }
    }
}

/* const pathToFile = path.join(__dirname, "f1.txt")
const pathToNewDestination = path.join(__dirname, "f10", "copy.txt")

fs.copyFile(pathToFile, pathToNewDestination, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully copied and moved the file!")
  }
}) */

function movetoOrganised(src,dest,key,fileName)
{
  let pathToFile=src;
  let pathToNewDestination=path.join(dest,"organised_Files",key,fileName);
  //console.log("src"+pathToFile);
  //console.log("dest"+pathToNewDestination);
  fs.copyFile(pathToFile, pathToNewDestination, function(err) {
    if (err) {
      throw err
    } else {
      console.log("Successfully copied and moved the file!")
    }
  });
  
}
function copyFileToOrganised(dirPath,lastExt,orgPath,fileName)
{
    for(let x in types)
    {
        
     let arr=types[x];
     for(let i in arr)
     {
         if(arr[i]==lastExt)
         {
         movetoOrganised(dirPath,orgPath,x,fileName) 

         }
     }   
    }
}
function isFile(dirPath)
{
    return fs.lstatSync(dirPath).isFile();
}
function viewContents(dirPath)
{
    return fs.readdirSync(dirPath);
}


exports.orgainse=orgainse;