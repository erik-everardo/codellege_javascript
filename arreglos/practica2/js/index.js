const calcularButton = document.querySelector("#calcularButton");

calcularButton.addEventListener("click", function() {
    let entradaRaw = document.querySelector("#entrada").value;

    let arrayDeStrings = String(entradaRaw).split(",");
    if(arrayDeStrings.length != 10) {
        alert("Por favor, ingresa 10 numeros");
        return;
    }

    let arrayDeNumeros = [];
    arrayDeStrings.forEach(function(value) {
        arrayDeNumeros.push(Number(value));
    });

    alert("La media es " + mediaDeElementosDeArray(arrayDeNumeros));
});

function mediaDeElementosDeArray(array) {
    let suma = 0;
    
    array.forEach(function(value) {
        suma += value;
    });

    return suma/array.length;
}