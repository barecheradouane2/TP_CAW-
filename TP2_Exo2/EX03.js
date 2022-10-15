

let thend = document.getElementById("end");

     thend.addEventListener("mouseover",function(){
        if( walls[0].classList.contains("lose")){
            alert("you lose the game, try agin plz");
        }else{
            alert("you win ");
        }
    
 });