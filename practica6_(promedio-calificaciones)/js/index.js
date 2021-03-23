const camposDeCalificaciones = document.querySelectorAll('.calificacion');
const campoDeMatricula = document.getElementById("matricula");

document.getElementById("botonCalcularPormedio").addEventListener("click", function() {
    document.getElementById("respuesta").innerHTML = 
    `EL alumno con matrícula <b>${campoDeMatricula.value}</b> obtiene <b>${calcularPromedio(camposDeCalificaciones)}</b> de promedio`;
});

function calcularPromedio(coleccion) {
    let suma = 0;
    for(calificacion of coleccion) {
        suma += Number(calificacion.value);
    }
    return suma/coleccion.length;
}