const inputNumero = document.getElementById("numero");
const button = document.getElementById("calcular");
const respuestaContainer = document.getElementById("respuestaTexto");

button.addEventListener("click", function() {
    resolverConOL();
});

function resolverConIfAnidados() {
    let numero = Number(inputNumero.value);
    if(numero <= 999) {
        respuestaContainer.innerHTML = "El numero es de 3 cifras";
        if(numero <= 99) {
            respuestaContainer.innerHTML = "El numero es de 2 cifras";
            if(numero <= 9) {
                respuestaContainer.innerHTML = "El numero es de 1 cifra";
            }
        }
    } else {
        respuestaContainer.innerHTML = "Error: el numero debe ser de entre 1 y 3 cifras";
    }
}

function resolverConOL() {
    let numero = Number(inputNumero.value);

    if(numero >= 0 && numero <= 9) {
        respuestaContainer.innerHTML = "El numero es de 1 cifra";
    } else if(numero >= 10 && numero <= 99) {
        respuestaContainer.innerHTML = "El numero es de 2 cifras";
    } else if(numero >= 100 && numero <= 999) {
        respuestaContainer.innerHTML = "El numero es de 3 cifras";
    } else if(numero < 0){
        respuestaContainer.innerHTML = "Error: el numero debe ser positivo";
    } else {
        respuestaContainer.innerHTML = "Error: el numero debe ser de entre 1 y 3 cifras";
    }
}