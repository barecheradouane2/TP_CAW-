





thend.addEventListener("mouseover",function(){

    const cha = document.getElementById('status');


cha.innerHTML = `<h2 id="status" >Move your mouse over the "S" to begin</h2>`;


   


    if( walls[0].classList.contains("lose")){
        mssg=" you lose the game, try again plz";
        cha.innerHTML = `<h2 id="status" style="background-color: red">you lose the game, try again plz</h2>`;
        
    } else{
       
        cha.innerHTML = `<h2 id="status" style="color: lime">you win the game</h2>`;

        
        
    }
   
});
