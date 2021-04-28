const inpNumeroDeValores = document.getElementById("inpNumeroDeValores");
const inpValores = document.getElementById("inpValores");
const btnMostrarValores = document.getElementById("btnMostrarValores");
const contenedorResultado = document.getElementById("contenedorResultado");
const conteo = document.getElementById("conteo");

let longitudLista = 0;
let numerosAlmacenados = [];

inpNumeroDeValores.addEventListener("keyup", function(event) {
    if(event.key != "Enter") return;

    longitudLista = Number(inpNumeroDeValores.value);
    inpNumeroDeValores.disabled = true;
    numerosAlmacenados = [];
    conteo.innerHTML = generarConteo(numerosAlmacenados.length + 1,longitudLista);
});

inpValores.addEventListener("keyup", function(event) {
    if(event.key != "Enter") return;

    if(numerosAlmacenados.length == longitudLista) {
        alert("Se ha alcanzado el limite de almacenamiento definido por usted");
        return;
    }

    let numero = Number(inpValores.value);
    if(isNaN(numero)) {
        alert("Por favor, ingrese un numero en el campo");
        return;
    }

    if(existeEnArray(numero,numerosAlmacenados)) {
        alert("El valor ya existe, intente uno diferente");
        return;
    }

    numerosAlmacenados.push(Number(numero));
    inpValores.value = "";
    conteo.innerHTML = generarConteo(numerosAlmacenados.length + 1,longitudLista);
});

btnMostrarValores.addEventListener("click", function() {
    contenedorResultado.innerHTML = "";
    numerosAlmacenados.forEach(function(value) {
        contenedorResultado.innerHTML += `<li class="group-list-item">${value}</li>`;
    });
});

function existeEnArray(elemento, array) {
    for(let i = 0; i<array.length; i++) {
        if(array[i] === elemento) {
            return true;
        }
    }
    return false;
}

function generarConteo(cual, de) {
    return `${cual} de ${de}`;
}