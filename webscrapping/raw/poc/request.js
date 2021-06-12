let request=require("sync-request");
let cheerio=require("cheerio");
let url="https://www.espncricinfo.com/series/nepal-tri-nation-t20i-series-2021-1257942/nepal-vs-netherlands-4th-match-1257948/full-scorecard";
let url1="https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-kolkata-knight-riders-21st-match-1254078/full-scorecard";
request(url1,cb);
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
    let TableBAt=selectortool(".table.batsman");
    //let eachtb=selectortool();

    console.log(TableBAt.length);
    for(let i=0;i<TableBAt.length;i++){
       
        let eachrowInTable=selectortool(TableBAt[i]).find("tbody tr a");

        //console.log(eachrowInTable.length);
        for(let j=0;j<eachrowInTable.length;j++)
        {
            let playername=selectortool(eachrowInTable[j]).text();
            //console.log(playername);
            let linkofprof=selectortool(eachrowInTable[j]).attr("href");
            let link="https://www.espncricinfo.com"+linkofprof;
           // console.log(link);
            printBirthday(link,playername);
            //playername=playername.split(" ");
            //console.log("pLENGTH"+playername.length);
            //console.log("PLAYER: "+playername+"\n");
        }
        //console.log(eachrowInTable.text()+"\n");
    }
}
function printBirthday(link,name)
{
    request(link,cbb);
    function cbb(error,response,html)
{
    if(error)
    {
        console.log(error);

    }else{
        //console.log(response.statusCode);
        callbirthday(html,name)
    }
}
}
function callbirthday(html,name)
{
    let seltool=cheerio.load(html);
    let array=seltool("h5.player-card-description.gray-900");
    let dob=seltool(array[1]).text();
    console.log(name+" was born on "+dob);

}

function extract(html)
{
    let selectortool=cheerio.load(html);
    let selectElem=selectortool("table.table.bowler");
    let bowtab="";
    let playername="";
    let wicket=-125;
    for(let i=0;i<selectElem.length;i++)
    {
    bowtab+=(selectortool(selectElem[i]).html());
    let bowtab1=(selectortool(selectElem[i]).find("tr tbody"));
    for(let j=0;j<bowtab1.length;j++)
    {
     let eachBow=(selectortool(bowtab1[j]).find("td"));
     let pname=selectortool(eachBow[0]).text();
let wic= selectortool(eachBow[4]).text()
     console.log("Player Name:"+pname);
     console.log("Wicket:"+wic);
     if(wic>wicket)
     {
         wicket=wic;
         playername=pname;
     }
    }
    }
    //console.log(bowtab);

    console.log("highest"+playername+wicket+"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //let livcomm=selectortool(selectElem[1]);
    //console.log(livcomm.html());
}