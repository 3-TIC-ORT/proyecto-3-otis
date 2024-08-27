let usuarie = ["a", "df"];
let contraseñe = ["b", "eg"];

let number = {
    usuario: usuarie,
    contraseña: contraseñe,
}

function noh(){
    for(let g = 0; g < number.usuario.length; g++){
        if(document.getElementById("usuario").value === number.usuario[g] && document.getElementById("contraseña").value === number.contraseña[g]){
            alert("muy bien");
        }
    }
}

document.getElementById("entrar").addEventListener("click", noh);