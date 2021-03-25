const campoMetros = document.getElementById("metros");
const botonCalcular = document.getElementById("calcular");
const contenedorRespuesta = document.getElementById("resultado");

botonCalcular.addEventListener("click", function() {
    let metros = Number(campoMetros.value);
    contenedorRespuesta.innerHTML = `<b>${metros * 39.37}</b> pulgadas`;
});