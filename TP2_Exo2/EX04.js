

let s = document.getElementById("start");
s.addEventListener("click",function(){

    for (var i = 0 ; i <=4; i++) {
        // walls[i].classList.remove("cheat");
        walls[i].classList.remove("lose");
        wall[i].style.backgroundColor ="#eee";
        
    }
    const chang = document.getElementById('status');


    chang.innerHTML = `<span id="status">Move your mouse over the "S" to begin.</span>`;
    
 });