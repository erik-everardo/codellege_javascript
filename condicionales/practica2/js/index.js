const campoCalificacion = document.getElementById("calificacion");
const botonCalificar = document.getElementById("boton-calificar");
const contenedorRespuesta = document.getElementById("respuesta");

botonCalificar.addEventListener("click", function() {
    if(Number(campoCalificacion.value) > 6) {
        contenedorRespuesta.innerHTML = "Aprobado";
    } else {
        contenedorRespuesta.innerHTML = "Reprobado";
    }
});