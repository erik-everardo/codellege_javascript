/*
Problema 2
Se necesita un programa que solicite el numero de respuestas correctas, incorrectas y en
blanco, correspondientes a postulantes, y muestre su puntaje final considerado, que por cada
respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco
tendrá 0.
*/
let campoRespuestasCorrectas = document.getElementById("respuestas-correctas");
let campoRespuestasIncorrectas = document.getElementById("respuestas-incorrectas");
let campoRespuestasEnBlanco = document.getElementById("resputas-en-blanco");
let botonCalcularCalificacion = document.getElementById("boton-calcular");
let contenedorCalificacion = document.getElementById("calificacion");

botonCalcularCalificacion.addEventListener("click", function() {
    let respuestasCorrectas = Number(campoRespuestasCorrectas.value);
    let respuestasIncorrectas = Number(campoRespuestasIncorrectas.value);

    let puntos = (respuestasCorrectas * 4) - respuestasIncorrectas;

    contenedorCalificacion.innerHTML = `Puntos: <b>${puntos}</b>`;
});