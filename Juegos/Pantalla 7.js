let orden = [];
let seleccionados = [];
let kkk = 999;
let bloqueador = 1
function retrasar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function juego(){
    kkk = 999;
for(let numero = 0; numero<kkk; numero++){
orden.push(document.getElementById(`boton${Math.floor(4*Math.random())}`));
for(let demostración = 0; demostración<= numero; demostración++){
  document.getElementById("todo").style.backgroundColor = 'rgb(250, 228, 103)';
  document.getElementById("mensajemalo").innerHTML = "Observa y acuérdate..."
  bloqueador = 1
    orden[demostración].style.filter = "brightness(200%)";
    setTimeout(() => {
    orden[demostración].style.filter = "brightness(100%)";
    }, 500);
    await retrasar(1000);
    console.log(orden[demostración])
    bloqueador = 0
}
document.getElementById("mensajemalo").innerHTML = "Ahora copia lo que viste."
document.getElementById("todo").style.backgroundColor = 'rgb(130, 204, 238)';
let laotra = 0
setTimeout(() => {
    for(laotra = 0; laotra<= numero; laotra++){
        if(seleccionados[laotra] != orden[laotra]){
          document.getElementById("todo").style.backgroundColor = 'rgb(255, 85, 85)';
            kkk = 0;
            orden = [];
            bloqueador = 1
            document.getElementById("mensajemalo").innerHTML = "¡Oh no!¡Perdiste!¡Volvamos a empezar!"
        }
    }
    }, 3000*laotra+3000);
    await retrasar(3000*laotra+3000);
    seleccionados = []


console.log(numero+1)
}
}


function rojo(){
  if(bloqueador === 0){
    document.getElementById("boton0").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton0").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton0"));
  }
}
function azul(){
  if(bloqueador === 0){
    document.getElementById("boton1").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton1").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton1"));
  }
  }
  function amarillo(){
    if(bloqueador === 0){
    document.getElementById("boton2").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton2").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton2"));
  }
  }
  function verde(){
    if(bloqueador === 0){
    document.getElementById("boton3").style.filter = "brightness(200%)";
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