let rng;
var cpu = '';
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
console.log(cpu)

cpu;
let pc = '';


document.getElementById('rock').addEventListener("click", function rock() {
    pc = 'rock'
    if(cpu == 'scissor' && pc =='rock'){
        alert('You Win')
    }
    else if(cpu == pc){
        alert('You Tie')
    }else {
        alert('You Lose')
    }
    computer();
});
document.getElementById('paper').addEventListener("click", function() {
    
    pc = 'paper'
    if(cpu == 'rock' && pc == 'paper'){
        alert('You Win')
    }else if(cpu == pc){
        alert('You Tie')
    }else {
        alert('You Lose')
    }
    computer();
});

document.getElementById('scissor').addEventListener("click", function() {
    pc = 'scissor'
    if(cpu == 'paper' && pc == 'scissor'){
        alert('You Win')
    }else if(cpu == pc){
        alert('You Tie')
    }else {
        alert('You Lose')
    }
    computer();
});





    
    
 