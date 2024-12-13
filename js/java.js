let rng;
var cpu = '';
rng = Math.floor((Math.random()*3)+1);
if(rng == 1){
    cpu = 'rock'
    
}else if(rng == 2){
    cpu = 'paper'
    
}else {
    cpu = 'scissor'
    
}
function computer() {
    rng = Math.floor((Math.random()*3)+1);
    if(rng == 1){
        cpu = 'rock'
        
    }else if(rng == 2){
        cpu = 'paper'
        
    }else {
        cpu = 'scissor'
       
    }
}

function change(){
    if(count == 1){
        b0.style.backgroundImage= b1;
        e0.src = ('img/statue.png')
    }
    else if(count == 2){
        b0.style.backgroundImage= b2;
        e0.src = ('')
    }else if(count ==3){
        b0.style.backgroundImage= b3;
        e0.src = ('img/demon.png')
    }else if(count ==4){
        b0.style.backgroundImage= b4;
        e0.src = ('img/hades.png')
    }else if(count ==5){
        window.location.href = 'end.html';
    }
}
function darkness(){
    count ++;
    const overlay = document.getElementById('darkness');
    overlay.style.opacity = 1;
    overlay.style.transform = "scale(100)";
    
    setTimeout(function () {
        overlay.style.transform = "scale(0)";
        change()
    }, 1000)
}
function tie(){
text.innerHTML = 'NUHUH'
setTimeout(function () {
    text.innerHTML = ''
}, 500)
}


console.log(cpu)
var b1 = 'url("../img/cave.jpg")';
var b2 = 'url("../img/styx.jpg")';
var b3 = 'url("../img/entrance.jpg")';
var b4 = 'url("../img/castle.jpg")';

var choice ='';

var b0 = document.getElementById('background');
var e0 = document.getElementById('enemy');
var count = 1;
let pc = '';

var text = document.getElementById('nuh');


document.getElementById('rock').addEventListener("click", function rock() {
    pc = 'rock'
    if(cpu == 'scissor' && pc =='rock'){
         
        darkness()
        localStorage.setItem("count", count);
    }
    else if(cpu == pc){
        tie()
    }else {
          
         window.location.href = 'fail.html'
        
    }
    computer();
    
});
document.getElementById('paper').addEventListener("click", function() {
    pc = 'paper'
    if(cpu == 'rock' && pc == 'paper'){
        darkness()
        localStorage.setItem("count", count);
    }else if(cpu == pc){
        tie()
    }else {
          
         window.location.href = 'fail.html'
    }
    computer();
    
});
document.getElementById('scissor').addEventListener("click", function() {
    pc = 'scissor'
    if(cpu == 'paper' && pc == 'scissor'){
         
        darkness()
        localStorage.setItem("count", count);
    }else if(cpu == pc){
        tie()
    }else {
          
         window.location.href = 'fail.html'
    }
    computer();
});





