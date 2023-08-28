document.querySelector(".btt").addEventListener("click",function(){
    
    if(document.querySelector("#box1").value.toUpperCase()===document.querySelector("#box2").value.toUpperCase() && document.querySelector("#box2").value.toUpperCase()===document.querySelector("#box3").value.toUpperCase()){
       
      document.querySelector("#box1").style.backgroundColor="lightgreen";
      document.querySelector("#box2").style.backgroundColor="lightgreen";
      document.querySelector("#box3").style.backgroundColor="lightgreen";
    }
    else if(document.querySelector("#box4").value.toUpperCase()===document.querySelector("#box5").value.toUpperCase() && document.querySelector("#box5").value.toUpperCase()===document.querySelector("#box6").value.toUpperCase()){
       
        document.querySelector("#box4").style.backgroundColor="lightgreen";
        document.querySelector("#box5").style.backgroundColor="lightgreen";
        document.querySelector("#box6").style.backgroundColor="lightgreen";
      }
      else if(document.querySelector("#box7").value.toUpperCase()===document.querySelector("#box8").value.toUpperCase() && document.querySelector("#box8").value.toUpperCase()===document.querySelector("#box9").value.toUpperCase()){
       
        document.querySelector("#box7").style.backgroundColor="lightgreen";
        document.querySelector("#box8").style.backgroundColor="lightgreen";
        document.querySelector("#box9").style.backgroundColor="lightgreen";
      }
      else if(document.querySelector("#box1").value.toUpperCase()===document.querySelector("#box4").value.toUpperCase() && document.querySelector("#box4").value.toUpperCase()===document.querySelector("#box7").value.toUpperCase()){
       
        document.querySelector("#box1").style.backgroundColor="lightgreen";
        document.querySelector("#box4").style.backgroundColor="lightgreen";
        document.querySelector("#box7").style.backgroundColor="lightgreen";
      }
      else if(document.querySelector("#box2").value.toUpperCase()===document.querySelector("#box5").value.toUpperCase() && document.querySelector("#box5").value.toUpperCase()===document.querySelector("#box8").value.toUpperCase()){
       
        document.querySelector("#box2").style.backgroundColor="lightgreen";
        document.querySelector("#box5").style.backgroundColor="lightgreen";
        document.querySelector("#box8").style.backgroundColor="lightgreen";
      }
      else if(document.querySelector("#box3").value.toUpperCase()===document.querySelector("#box6").value.toUpperCase() && document.querySelector("#box6").value.toUpperCase()===document.querySelector("#box9").value.toUpperCase()){
       
        document.querySelector("#box3").style.backgroundColor="lightgreen";
        document.querySelector("#box6").style.backgroundColor="lightgreen";
        document.querySelector("#box9").style.backgroundColor="lightgreen";
      }
      else if(document.querySelector("#box1").value.toUpperCase()===document.querySelector("#box5").value.toUpperCase() && document.querySelector("#box5").value.toUpperCase()===document.querySelector("#box9").value.toUpperCase()){
       
        document.querySelector("#box1").style.backgroundColor="lightgreen";
        document.querySelector("#box5").style.backgroundColor="lightgreen";
        document.querySelector("#box9").style.backgroundColor="lightgreen";
      }
      else if(document.querySelector("#box3").value.toUpperCase()===document.querySelector("#box5").value.toUpperCase() && document.querySelector("#box5").value.toUpperCase()===document.querySelector("#box7").value.toUpperCase()){
       
        document.querySelector("#box3").style.backgroundColor="lightgreen";
        document.querySelector("#box5").style.backgroundColor="lightgreen";
        document.querySelector("#box7").style.backgroundColor="lightgreen";
      }
      else{

        document.querySelector("#box1").style.backgroundColor="red";
        document.querySelector("#box2").style.backgroundColor="red";
        document.querySelector("#box3").style.backgroundColor="red";
        document.querySelector("#box4").style.backgroundColor="red";
        document.querySelector("#box5").style.backgroundColor="red";
        document.querySelector("#box6").style.backgroundColor="red";
        document.querySelector("#box7").style.backgroundColor="red";
        document.querySelector("#box8").style.backgroundColor="red";
        document.querySelector("#box9").style.backgroundColor="red";
        
      }
    
    
})
console.log("hello");