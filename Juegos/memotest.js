let srci = ["memotest1.PNG", "memotest2.PNG", "memotest3.PNG", "memotest4.PNG", "memotest5.PNG", "memotest6.PNG", "memotest1.PNG", "memotest2.PNG", "memotest3.PNG", "memotest4.PNG", "memotest5.PNG", "memotest6.PNG"];

for(let i=srci.length-1; i > 0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let t = srci[i]; 
    srci[i] = srci[j];
    srci[j] = t
}
for(let noi = 0; noi < 12; noi++){
    document.getElementById(`boton${noi+1}`).addEventListener("click", srcreal);
}

let turnos = 1;
let primagen = "¿?";
function srcreal(){
    for(let le = 0; le < 12; le++){
    if(document.getElementById(`boton${le+1}`) === this){
        document.getElementsByClassName("signodepregunta")[le].src = srci[le];
        if(turnos === 1){
        primagen = srci[le];
        turnos = 2;
    } else{
        if(srci[le] === primagen){
            alert("muy bien");
        }
         turnos = 1;
    }
        
    }
    }
}