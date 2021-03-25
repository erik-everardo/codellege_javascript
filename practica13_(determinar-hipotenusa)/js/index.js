const campoCatetoAdyacente = document.getElementById("a");
const campoCatetoOpuesto = document.getElementById("b");
const boton = document.getElementById("calcular");
const contenedorHipotenusa = document.getElementById("hipotenusa");

boton.addEventListener("click", function() {
    let a = Number(campoCatetoAdyacente.value);
    let b = Number(campoCatetoOpuesto.value);
    contenedorHipotenusa.innerHTML = `Hipotenusa = <b>${calcularHipotenusa(a,b)}</b>`;
});

function calcularHipotenusa(a, b) {
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}