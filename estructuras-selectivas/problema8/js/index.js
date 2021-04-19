// 8.	El promedio de prácticas de un curso se calcula en base a cuatro prácticas calificadas de las 
//     cuales se elimina la nota menor y se promedian las tres notas más altas. Diseñe un algoritmo que 
//     determine la nota eliminada y el promedio de prácticas de un estudiante.

const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", function() {
    let numeroMayor;
    let numeroMedio;
    let numeroMedio2;
    let numeroMenor;

    // con este algoritmo estoy asumiendo que las calificaciones son todas diferentes
    // podría haber utilizado algun otro algoritmo de ordenamiento, como el de burbuja (el más sencillo)
    // o directamente los metodos integrados de array (sort)
    let a = Number(prompt("Ingresar calificación 1"));
    numeroMayor = a;

    let b = Number(prompt("Ingresar calificación 2"));
    if(b > a) {
        numeroMayor = b;
        numeroMedio = a;
    } else {
        numeroMedio = b;
    }

    let c = Number(prompt("Ingresar calificación 3"));
    if(c > numeroMayor) {
        numeroMedio2 = numeroMedio;
        numeroMedio = numeroMayor;
        numeroMayor = c;
    } else if(c > numeroMedio) {
        numeroMedio2 = numeroMedio;
        numeroMenor = numeroMedio2;
        numeroMedio = c;
    } else {
        numeroMedio2 = c;
    }

    let d = Number(prompt("Ingresar calificación 4"));
    if(d > numeroMayor) {
        numeroMenor = numeroMedio2;
        numeroMedio2 = numeroMedio;
        numeroMedio = numeroMayor;
        numeroMayor = d;
    } else if(d > numeroMedio) {
        numeroMenor = numeroMedio2;
        numeroMedio2 = numeroMedio;
        numeroMedio = d;
    } else if(d > numeroMedio2) {
        numeroMenor = numeroMedio2;
        numeroMedio2 = d;
    } else {
        numeroMenor = d;
    }

    let promedio = (numeroMayor + numeroMedio + numeroMedio2)/3;
    alert(`El promedio es: ${promedio}`);
})