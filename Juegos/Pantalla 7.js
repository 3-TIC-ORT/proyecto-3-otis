let orden = [];
let seleccionados = [];
let kkk = 1;
let bloqueador = 1
let bloqueador2 = 0
function retrasar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function juego(){
  if(bloqueador2 === 0){
    document.getElementById("Puntuacion").innerHTML = "Puntuación: 0"
    bloqueador2 = 1;
    kkk = 2;
for(let numero = 0; numero<kkk; numero++){
orden.push(document.getElementById(`boton${Math.floor(4*Math.random())}`));
for(let demostración = 0; demostración<= numero; demostración++){
  document.getElementById("mensajemalo").innerHTML = "Observa y acuérdate..."
  bloqueador = 1
    orden[demostración].style.filter = "brightness(250%)";
    setTimeout(() => {
    orden[demostración].style.filter = "brightness(100%)";
    }, 500);
    await retrasar(1000);
    bloqueador = 0
}
document.getElementById("mensajemalo").innerHTML = "Ahora copia lo que viste."
let laotra = 0
setTimeout(() => {
    for(laotra = 0; laotra<= numero; laotra++){
        if(seleccionados[laotra] != orden[laotra] || seleccionados.length != orden.length){
            kkk = 0;
            orden = [];
            bloqueador = 1
            document.getElementById("mensajemalo").innerHTML = "¡Oh no!¡Perdiste!¡Volvamos a empezar!"
            bloqueador2 = 0
            document.getElementById("Puntuacion").innerHTML = `Puntuación: ${numero}`
        } else{
    document.getElementById("Puntuacion").innerHTML = `Puntuación: ${numero+1}`
        }
    }
    }, 750*(numero+1)+2500);
    await retrasar(750*(numero+1)+2500);
    seleccionados = []
    kkk++
}
}
}


function rojo(){
  if(bloqueador === 0){
    document.getElementById("boton0").style.filter = "brightness(250%)";
    setTimeout(() => {
    document.getElementById("boton0").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton0"));
  }
}
function azul(){
  if(bloqueador === 0){
    document.getElementById("boton1").style.filter = "brightness(250%)";
    setTimeout(() => {
    document.getElementById("boton1").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton1"));
  }
  }
  function amarillo(){
    if(bloqueador === 0){
    document.getElementById("boton2").style.filter = "brightness(250%)";
    setTimeout(() => {
    document.getElementById("boton2").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton2"));
  }
  }
  function verde(){
    if(bloqueador === 0){
    document.getElementById("boton3").style.filter = "brightness(250%)";
    setTimeout(() => {
    document.getElementById("boton3").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton3"));
  }
  }

document.getElementById("Empezar").addEventListener("click", juego);
document.getElementById("boton0").addEventListener("click", rojo);
document.getElementById("boton1").addEventListener("click", azul);
document.getElementById("boton2").addEventListener("click", amarillo);
document.getElementById("boton3").addEventListener("click", verde);