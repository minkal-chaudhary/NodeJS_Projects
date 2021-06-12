let request=require("request");
let cheerio=require("cheerio");
var jsonCreation = require('./JsonCreation.js');

const { next } = require("cheerio/lib/api/traversing");
let url="https://github.com/topics";
request(url,cb);
function cb(err,response,html)
{
    if(err)
    {
        console.log(err);
    }
    console.log(response.statusCode);
    //console.log(html);
    extract1(html);
}
function extract1(html)
{
    let selectortool=cheerio.load(html);
    //console.log(selectortool);
    //let listofTopics=selectortool(".col-12.col-sm-6.col-md-4.mb-4");
    let listofTopics8=selectortool(".py-4.border-bottom");
    //console.log(listofTopics8.length);
    for(let i=4;i<10;i++)
    {
    let topictag=selectortool(listofTopics8[i]).html();
    let topicaName=selectortool(listofTopics8[i]).find("p.f3.lh-condensed.mb-0.mt-1.Link--primary").text();
    let nextPageLink=selectortool(topictag).find("a").attr("href");
    //console.log("TOPIC:"+topicaName);
    let fullLink="http://github.com"+nextPageLink;

    getTop5RepoForTopic(fullLink,topicaName);
    }
    let topicaName=selectortool(listofTopics8[4]).find("p.f3.lh-condensed.mb-0.mt-1.Link--primary");
    //let nextPageLink=selectortool(listofTopics8[4]).find("a");
    //let nextPageLinkhref=selectortool(listofTopics8[4]).find("p.f3.lh-condensed.mb-0.mt-1.Link--primary").attr("href");
    //console.log(nextPageLink.html());
    //let nextPageLink=selectortool(android).find("a").attr("href");
    //let fullLink="http://github.com"+nextPageLink;
    //console.log(fullLink);
    //console.log(topicaName.html())

    //getTop5RepoForTopic(fullLink);
  
   //console.log(selectortool(listofTopics8[i]).text());
    
}
function getTop5RepoForTopic(fullLink,topicaName)
{
    request(fullLink,cbb);
    function cbb(error,response,html)
    {
        if(error)
        {
            console.log(error);
    
        }else{
            //console.log(response.statusCode);
            getRepo(html,topicaName);
        }


    }
}
function getRepo(html,topicaName)
{
    
    let selectortool=cheerio.load(html);

    let listofRepo=selectortool("a.text-bold");

   //console.log("TOPIC:"+topicaName);
    //console.log(listofRepo.length);
    for(let i=1;i<=5;i++)
    {
        let issuesUrl="http://github.com"+selectortool(listofRepo[i]).attr("href")+"/issues";
    //console.log("REPO : "+topicaName+ " is "+properRepoName);
    //console.log(issuesUrl);
    getIssuesDesc(issuesUrl,topicaName);
}
}
function getIssuesDesc(issuesUrl,topicaName)
{
    request(issuesUrl,cb3);
    function cb3(error,response,html)
    {
        if(error)
        {
            console.log(error);
    
        }else{
            //console.log("status"+response.statusCode);
            getTopIssues(html,topicaName);
        }
}
}
function getTopIssues(html,topicaName)
{

    let selectortool=cheerio.load(html);
    let repoName=selectortool("strong.mr-2.flex-self-stretch");
    let repositoryName=repoName.text().trim();
    let listofIssues=selectortool("a.d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0");
   // console.log(topicaName+":" +repositoryName);
//console.log("Topic "+topicaName);
    

var obj = {
    issues: []
 };    

     for(let i=0;i<5;i++)
     {
         let issue=""+selectortool(listofIssues[i]).attr("aria-label");
         
         let issueName=issue.slice(15).trim();

      
         obj.issues.push(issueName);
        //console.log(obj);
        
         //if(issue!=undefined)
         //console.log("issue "+issue.slice(15).trim());
     }
     jsonCreation.createGitIssuesJson(topicaName,repositoryName,JSON.stringify(obj));
}
