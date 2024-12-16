 
 var count = localStorage.getItem("count");
 
 
 function myFunction() {
     if(document.getElementById('myBtn').onclick){
         window.location.href = 'index.html';
         count = 1;
     }
   }
window.onload = vid();
 
function vid(){
    if(count >= 4){
        console.log("In here");
         var ivideo = document.getElementById('video');
         ivideo.src =  "img/Hadesfail.mp4";
         document.getElementById('myVideo').load();

    }
}
