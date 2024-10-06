const juego = document.querySelector(".juego");

let comidaX = 13, comidaY = 17;

const juegoInicial = () => {
    let puntos = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"> </div>`;
    juego.innerHTML = puntos;
}

juegoInicial();