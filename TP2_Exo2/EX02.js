

let walls = document.getElementsByClassName("boundary");

    for (var i = 0 ; i < walls.length; i++) {
        walls[i].addEventListener("mouseover",function(){
            
            walls[0].style.backgroundColor ="red";
            walls[1].style.backgroundColor ="red";
            walls[2].style.backgroundColor ="red";
            walls[3].style.backgroundColor ="red";
            walls[4].style.backgroundColor ="red";
           
           
            // walls[i].classList.remove("cheat");
        

            walls[0].classList.add("lose");
            walls[1].classList.add("lose");
            walls[2].classList.add("lose");
            walls[3].classList.add("lose");
            walls[4].classList.add("lose");
        });
       
     }