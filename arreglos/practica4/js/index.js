const button = document.querySelector("#llenar");
const campoN = document.querySelector("#longitudDelArray");
const letreroCalculando = document.querySelector("#calculando");

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

function sumarArray(array) {
    let suma = 0;
    array.forEach(function (valor) {
        suma += valor;
    });

    return suma;
}

function calcular() {
    let array = [];
    let cuantos = Number(document.querySelector("#longitudDelArray").value);

    for (let i = 0; i < cuantos; i++) {
        array.push(generarNumeroAleatorio(0, 9));
    }
    mostrarArray(array, document.querySelector("#resultado"));
    document.getElementById("suma").innerHTML = `Suma = ${sumarArray(array)}`;
}

campoN.addEventListener("keyup", function (event) {
    if (event.key !== "Enter") return;
    calcular();
})

button.addEventListener("click", calcular);