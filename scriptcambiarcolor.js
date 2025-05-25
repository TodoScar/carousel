let colores = ["#493383", "#6891d2", "#1d7bc3", "#4b1799", "#578bcb"];
let indice = 0;

function cambiarColor(){
    document.body.style.brackgroundColor=colores[indice];
    indice = (indice + 1) % colores.length;
}