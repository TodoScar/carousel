let fuentes = ["Georgia", "Times New Roman", "Times", "serif"];
let indexFuente = 0;

function cambiarFuente(){
    document.body.style.fontFamily= 
    fuentes[indexFuente];
    indexFuente = (indexFuente + 1) %
    fuentes.length;
}