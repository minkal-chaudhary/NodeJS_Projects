let fs =require("fs");
let path =require("path");


//let orgfile=path.join("F://jsJSON","organised_Files");
//console.log(orgfile);
//createDir(orgfile);

/*  fs.appendFile(orgfile+'\\mynewfile1.json', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
 */
function createDir(orgPath)
{
   if(!fs.existsSync(orgPath))
      {fs.mkdirSync(orgPath);
      } 
}

function createGitIssuesJson(topicaName,repositoryName,issues)
{
    let orgfile=path.join("F://jsJSON",topicaName);
    createDir(orgfile);
     //console.log(orgfile);
     console.log(repositoryName);
     repoName='//'+repositoryName+'.json';
    fs.appendFile(orgfile+repoName, issues, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
exports.createGitIssuesJson=createGitIssuesJson;