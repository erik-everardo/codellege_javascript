// Dados los datos A, B y C que representan números enteros diferentes, construir un algoritmo para escribir 
//     estos números en forma descendente.

const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", function() {
    let numeroMayor;
    let numeroMedio;
    let numeroMenor;

    let a = Number(prompt("Ingresar numero A"));
    numeroMayor = a;
    let b = Number(prompt("Ingresar numero B"));
    if(b > a) {
        numeroMayor = b;
        numeroMedio = a;
    } else {
        numeroMedio = b;
    }
    let c = Number(prompt("Ingresar numero C"));
    if(c > numeroMayor) {
        numeroMenor = numeroMedio;
        numeroMedio = numeroMayor;
        numeroMayor = c;
    } else if(c > numeroMedio) {
        numeroMenor = numeroMedio;
        numeroMedio = c;
    } else {
        numeroMenor = c;
    }

    alert(`${numeroMayor}, ${numeroMedio}, ${numeroMenor}`);
})