let srci = ["memotestA", "memotestB", "memotestC", "memotestD", "memotestE", "memotestF", "memotestA", "memotestB", "memotestC", "memotestD", "memotestE", "memotestF"];
let completasurs = "1.PNG";
let segundalista = [];
let botonesquenodebepasarnadasoselostoca = [];
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
let priboton = "¿?";
let priloultimo = "¿?";
let cantidaddepares = 0;
let bloqueador = 0;
let bloqueador2 = 0;
let dis = "¿?";
let ultimobloqueador = 0;
function srcreal(){
    for(let i = 0; i < botonesquenodebepasarnadasoselostoca.length; i++){
        if(this === botonesquenodebepasarnadasoselostoca[i]){
            ultimobloqueador = 1;
        }
    }
  if(bloqueador2 === 0 && bloqueador4 === 0 && ultimobloqueador === 0){
    bloqueador2 = 1;
    for(let le = 0; le < 12; le++){
    if(document.getElementById(`boton${le+1}`) === this){
        document.getElementsByClassName("signodepregunta")[le].src = srci[le]+completasurs;
        if(turnos === 1){
        primagen = srci[le];
        priboton = this;
        priloultimo = document.getElementById(`imagen${le+1}`);
        turnos = 2;
        bloqueador2 = 0;
    } else if(turnos === 2 &&  this != priboton) {
        if(srci[le] === primagen){
            for(let photopea = 0; photopea < segundalista.length; photopea++){
                if(segundalista.photopea === this){
                    bloqueador = 1; 
                  turnos = 2;
                  bloqueador2 = 0;
                }
            }
            if(bloqueador === 0){
                
                if(cantidaddepares === 0){
                document.getElementById("dialogo").innerHTML = "¡Muy bien! ya conseguiste hacer un par"
                 } else if(cantidaddepares === 5){
                document.getElementById("dialogo").innerHTML = "¡Ganaste! ¡Increible!"
                 } else if(cantidaddepares/2 === Math.floor(cantidaddepares/2)){
                document.getElementById("dialogo").innerHTML = "¡Que bueno! Conseguiste otro par"
                 } else if(cantidaddepares/2 != Math.floor(cantidaddepares/2)){
                document.getElementById("dialogo").innerHTML = "¡Wow! Eres exelente en este juego"   
                 }
                dis = this;
                setTimeout(() => {
                dis.style.opacity = "0";
                priboton.style.opacity = "0";
                cantidaddepares++;
                bloqueador2 = 0;
                botonesquenodebepasarnadasoselostoca.push(priboton);
                botonesquenodebepasarnadasoselostoca.push(dis);
            }, 1000);
            } else{
                bloqueador = 1;
                bloqueador2 = 0;
            }
        } else{
            document.getElementById("dialogo").innerHTML = "¡Oh no! Intenta de nuevo"
            setTimeout(() => {
                document.getElementsByClassName("signodepregunta")[le].src = "signodepregunta.png";
                priloultimo.src = "signodepregunta.png";
                bloqueador2 = 0;
            }, 1000);  
        }
         turnos = 1;
    } else{
        bloqueador2 = 0;
    }
        
    }
    }
}
ultimobloqueador = 0;
}
document.getElementById("volverajugar").addEventListener("click", volverajugar);
function volverajugar(){
    turnos = 1;
    primagen = "¿?";
    priboton = "¿?";
     priloultimo = "¿?";
    cantidaddepares = 0;
     bloqueador2 = 0;
     turnos = 1;
     botonesquenodebepasarnadasoselostoca = [];
     for(let LETm = 0; LETm <  12; LETm++){
        document.getElementById(`imagen${LETm+1}`).src = "signodepregunta.png";
        document.getElementById(`boton${LETm+1}`).style.opacity = "1";
     }
     document.getElementById("dialogo").innerHTML = "Intenta de levantar la maxima cantidad de iguales en el minimo tiempo posible"
     segundalista = [];
    for(let i=srci.length-1; i > 0; i--){
         let j = Math.floor(Math.random()*(i+1));
         let t = srci[i]; 
         srci[i] = srci[j];
            srci[j] = t
    }
    dis = "¿?";
}
let bloqueador3 = 1;
let bloqueador4 = 0;
document.getElementById("cambiandoestilos").addEventListener("click", mostrarlacosa);
function mostrarlacosa (){
    if(bloqueador4 === 0){
    document.getElementById("menudeestilos").style.right = "17%";
    document.getElementById("body").style.filter = "brightness(80%)"
    bloqueador4 = 1;
    setTimeout(() => {
    bloqueador3 = 0; 
}, 100);
}  
}
document.getElementById("cerrar").addEventListener("click", sacaelaside);
function sacaelaside(){
     if(bloqueador3 === 0){
      document.getElementById("menudeestilos").style.right = "0%";
      document.getElementById("body").style.filter = "brightness(100%)"
      bloqueador3 = 1;
      setTimeout(() => {
        bloqueador4 = 0; 
    }, 100);
}
}
let botonanterior = document.getElementById("color1")
function cambiodecolor(){
    for(let i = 0; i < 12; i++){
        document.getElementById(`boton${i+1}`).style.backgroundColor = this.value
    }
    botonanterior.style.borderWidth = "0";
    botonanterior = this;
    this.style.borderWidth = "4px";
}
for(let i = 0; i < 4; i++){
    document.getElementById(`color${i+1}`).addEventListener("click", cambiodecolor);
}
function cambiodeimagen(){
    completasurs = `${this.value}.PNG`
    if(turnos === 2){
        priloultimo.src = primagen+completasurs;
    }
}

for(let i = 0; i < 6; i++){
    document.getElementById(`opcionesimagenes${i+1}`).addEventListener("click", cambiodeimagen);
}