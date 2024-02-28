function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 140; i++) {
        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;

    }
    document.querySelector("#pbtm").innerHTML = clutter
}
makeBubble()

var timer = 60;
function runtime() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent=timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector('#pbtm').innerHTML="<h1>Game Over</h1>";

        }
    }, 1000);
    
}
runtime()
var rn=0;
function newHit(){
    rn= Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=rn;
}
newHit()

var score = 0;
function newScore(){
    score += 10;
    document.querySelector('#scoreval').textContent=score;
}
document.querySelector('#pbtm').addEventListener("click",function(boo){
    var clickedNumber=Number(boo.target.textContent);
    if(clickedNumber===rn){
        newScore();
        makeBubble();
        newHit();
    }else{

    }
}
)