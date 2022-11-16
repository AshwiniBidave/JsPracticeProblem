let Head=0;
let Tail=1;
let TossCoin=Math.floor((Math.random()*10 )%2);
if(TossCoin==Head){
    console.log("Head");
}else{
    console.log("Tail");   
}
console.log(TossCoin);