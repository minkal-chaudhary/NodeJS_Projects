b();

function b(){
    console.log("heello");
}
n=0
while(n<5000000)
{
n++;

}
setInterval(cb,1000);
 function cb(){
     console.log("called after 1 sec");
 }