//top to bottom
//left to right
console.log("hello world");

let a=10;
a="hi i ma string";
console.log(a);

let obj={
    name:"minkal",
    add:{
        city:"gajraula",
        state:"uttar pradesh"
    },
    sayhi:function(param){
        console.log("greeting from caps",param);
        return "blessings";
    }
}
console.log(obj.sayhi("i mma param"));
console.log(obj.add);
console.log(obj["add"]);

for(let key in obj)
{
    console.log("key:",key ,"value:",obj[key]);
}