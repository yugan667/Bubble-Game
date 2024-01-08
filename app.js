

var timer  = 60;
var hitrn = 0;
function makeBubble() {
    let clutter = "";
for(let i =1;  i<170; i++){
    let rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble"> ${rn}</div>`
}
document.querySelector("#bpanel").innerHTML = clutter;

}
function runTimer(){
    
   var timerint = setInterval(function(){
    if(timer>0){
           timer--;
    document.querySelector("#Timer").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#bpanel").innerHTML = `<h1>Game Over!</h1>`;
       
    }
 
}, 1000);
}

function getNewHit(){
    
    hitrn= Math.floor(Math.random()*10);
  document.querySelector("#hit").textContent= hitrn;
}
var score= 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#bpanel").addEventListener("click" , function(details){
var clicked = ( Number(details.target.textContent));
if(hitrn === clicked){
    increaseScore();
    
makeBubble();
getNewHit();
}
})


makeBubble();
getNewHit();
runTimer();
increaseScore();
