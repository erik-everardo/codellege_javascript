const campoVelocidad = document.getElementById("velocidad");
const campoTiempo = document.getElementById("tiempo");
const contenedorRespuesta = document.getElementById("respuesta");
const botonCalcular = document.getElementById("calcular");

botonCalcular.addEventListener("click", function() {
    let respuesta = Number(campoTiempo.value) * Number(campoVelocidad.value);
    contenedorRespuesta.innerHTML = `La distancia recorrida es de <b>${respuesta} metros</b>`;
})