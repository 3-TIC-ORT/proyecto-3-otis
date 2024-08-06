let orden = [];
let seleccionados = [];
let kkk = 999;

function retrasar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function juego(){
    kkk = 999;
for(let numero = 0; numero<kkk; numero++){
orden.push(document.getElementById(`boton${Math.floor(4*Math.random())}`));

for(let demostración = 0; demostración<= numero; demostración++){
    orden[demostración].style.filter = "brightness(200%)";
    setTimeout(() => {
    orden[demostración].style.filter = "brightness(100%)";
    }, 500);
    await retrasar(1000);
    console.log(orden[demostración])
}
let laotra = 0
setTimeout(() => {
    for(laotra = 0; laotra<= numero; laotra++){
        if(seleccionados[laotra] != orden[laotra]){
            kkk = 0;
            orden = [];
            document.getElementById("cajamala").style.opacity = '1';
        }
    }
    }, 3000*laotra+3000);
    await retrasar(3000*laotra+3000);
    seleccionados = []


console.log(numero+1)
}
}


function rojo(){
    document.getElementById("boton0").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton0").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton0"));
  }
function azul(){
    document.getElementById("boton1").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton1").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton1"));
  }
  function amarillo(){
    document.getElementById("boton2").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton2").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton2"));
  }
  function verde(){
    document.getElementById("boton3").style.filter = "brightness(200%)";
    setTimeout(() => {
    document.getElementById("boton3").style.filter = "brightness(100%)";
    }, 500);
    seleccionados.push(document.getElementById("boton3"));
  }

document.getElementById("Empezar").addEventListener("click", juego);
document.getElementById("boton0").addEventListener("click", rojo);
document.getElementById("boton1").addEventListener("click", azul);
document.getElementById("boton2").addEventListener("click", amarillo);
document.getElementById("boton3").addEventListener("click", verde);

function continuar(){
    document.getElementById("cajamala").style.opacity = '1';
}
document.getElementById("continuar").addEventListener("click", continuar);