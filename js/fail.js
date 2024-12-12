 
 var count = localStorage.getItem("count");
 
 
 function myFunction() {
     if(document.getElementById('myBtn').onclick){
         window.location.href = 'index.html';
         count = 1;
     }
   }
 
 if(count >= 4){
     document.getElementById('video').setAttribute("src", "img/Hadesfail.mp4")
 }
