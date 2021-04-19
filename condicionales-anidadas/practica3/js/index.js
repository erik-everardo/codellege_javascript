const botonCalcular = document.getElementById("calcular");
const respuestaContainer = document.getElementById("respuestaTexto");

botonCalcular.addEventListener("click", function () {
    const calificacion1 = Number(document.getElementById("calificacion1").value);
    const calificacion2 = Number(document.getElementById("calificacion2").value);
    const calificacion3 = Number(document.getElementById("calificacion3").value);

    let promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    if(promedio >= 9) {
        respuestaContainer.innerHTML = "Aprobado";
    } else if(promedio >= 6 && promedio < 9) {
        respuestaContainer.innerHTML = "Regular";
    } else if(promedio < 6) {
        respuestaContainer.innerHTML = "Reprobado";
    }
});