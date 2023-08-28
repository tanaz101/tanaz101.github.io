
let alpha=['A','B','C','D','E','F','G','H','I','J']

let ren=Math.random()*10;
ren=~~ren;
let high=document.querySelector(".sc").textContent="20";
 let set=0;

document.querySelector(".btcheck").addEventListener("click", function () {

  let final=alpha[ren]

   let com=document.querySelector(".box1").value.toUpperCase();
   
   
  if(com===final){
    
  document.querySelector(".startg").textContent = "You win";
  document.querySelector("body").style.backgroundColor = "skyblue";
  document.querySelector(".num").textContent=final
 
  if(high>set){

    set=high;
    document.querySelector(".fast").textContent=set;

  }
  

  }else if(final<com){
    document.querySelector(".startg").textContent="Too High";
    high-=1;
    document.querySelector(".sc").textContent=high;
  }
  else if(final>com){
    document.querySelector(".startg").textContent="Too Low"
    high-=1;
    document.querySelector(".sc").textContent=high;
  }
});
document.querySelector(".btagain").addEventListener("click",function(){

  document.querySelector(".startg").textContent = "Guess The Alphabet !";
  document.querySelector("body").style.backgroundColor = "black";
  

  let ren=Math.random()*10;
ren=~~ren;
document.querySelector(".fast").textContent=high;
// let high=document.querySelector(".sc").textContent="20";
let final=alpha[ren]

   let com=document.querySelector(".box1").value.toUpperCase();

})

