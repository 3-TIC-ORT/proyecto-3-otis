document.getElementById("comenzar").addEventListener("click", activaranimacion);
let numerodeanimaciones = 0;
function activaranimacion(){
    if(numerodeanimaciones === 0){
    numerodeanimaciones = 1;
    document.getElementById("loanimo").className = "mianimacion";
    document.getElementById("amn").className = "amn";
    document.getElementById('inala').className = 'inala';
    document.getElementById('contiene').className = 'contiene';
    document.getElementById('exala').className = 'exala';
    setTimeout(() =>{
        document.getElementById('inala').className = 'inalacontieneexala';
    }, 3000);
    setTimeout(() =>{
        document.getElementById('contiene').className = 'inalacontieneexala';
    }, 9000);
    setTimeout(() => {
        document.getElementById('exala').className = 'inalacontieneexala';
        document.getElementById("loanimo").className = "minoanimacion";
        document.getElementById("amn").className = "noamn";
        numerodeanimaciones = 0;
        }, 18000);
    }
}