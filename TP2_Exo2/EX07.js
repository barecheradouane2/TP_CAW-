



        let cheat =  document.getElementById("maze");

              
  
 cheat.addEventListener("mouseover",function(){
        function cheating(){
         if (cha.innerHTML != `<h2 id="status" style="background-color: red">you lose the game, try again plz</h2>`&& cha.innerHTML != `<h2 id="status" style="color: lime">you win the game</h2>`) {
                        cha.innerHTML = `<h2 id="status" style="color: lime">you cheat</h2>`;
                        
                 }            

        }
      
           
            
        
       
     
    });





//         let cheat =  document.get("not(.maze)")       
  
//         cheat.addEventListener("mouseover",function(){
        
//         for (var i = 0 ; i <=4; i++) {
//                 walls[i].classList.add("cheat");
//                 wall[i].style.backgroundColor ="red";
                
//             }
           
            
        
       
     
//     });