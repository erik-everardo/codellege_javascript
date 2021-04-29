const campoN = document.getElementById("n");
const botonGenerar = document.getElementById("generar");

function generarNumeroAleatorio(min, max) {
    let random = Math.random();
    return Math.floor(random * (max - min) + min);
}

function mostrarArray(array, contenedor) {
    contenedor.innerHTML =
        "<thead><th>Indice</th><th>Valor</th></thead><tbody>"

    array.forEach(function (valor, indice) {
        contenedor.innerHTML += `<tr><td>${indice}</td> <td>${valor}</td></tr>`
    });

    contenedor.innerHTML += "</tbody>"
}

function esPrimo(numero) {
    let divisores = 0;
    for(let i=1; i<= numero; i++) {
        if(numero % i === 0) {
            divisores++;
        }
    }
    return divisores === 2;
}

function generar() {
    let array = [];
    let n = Number(campoN.value);

    while(array.length < n) {
        let numeroAleatorio = generarNumeroAleatorio(1, 100);
        if(esPrimo(numeroAleatorio)) {
            array.push(numeroAleatorio);
        }
    }
    return array;
}

botonGenerar.addEventListener("click", function() {
    console.time("Tiempo de calculo");
    mostrarArray(generar(), document.getElementById("respuesta"));
    console.timeEnd("Tiempo de calculo");
});