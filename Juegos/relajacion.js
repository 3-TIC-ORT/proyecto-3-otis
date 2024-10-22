document.getElementById("comenzar").addEventListener("click", activaranimacion);
let numerodeanimaciones = 0;
function activaranimacion(){
    if(numerodeanimaciones === 0){
    numerodeanimaciones = 1;
    document.getElementById("loanimo").className = "mianimacion";
    setTimeout(() => {
        document.getElementById("loanimo").className = "minoanimacion";
        numerodeanimaciones = 0;
        }, 16000);
    }
}