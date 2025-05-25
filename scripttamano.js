let tamanos = [ "14px", "18px", "22px", "26px"];
let indexTamano = 0;

function cambiarTamanoTexto(){
    document.body.style.fontSize=tamanos[indexTamano];
    indexTamano=(indexTamano + 1) % tamanos.length;
}
