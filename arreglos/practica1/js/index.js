const inputNumeros = document.getElementById("inputNumeros");
let arreglo = [];
let buttonMostrarNumeros = document.getElementById("buttonMostrarNumeros");

inputNumeros.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        if(arreglo.length < 10) {
            let numero = Number(inputNumeros.value);
            if(isNaN(numero) || inputNumeros.value.length === 0) {
                alert("Debe ingresar un numero");
            } else {
                arreglo.push(numero);
                inputNumeros.value = "";
                if(arreglo.length === 10) {
                    alert("Ya tiene 10 numeros");
                    console.log(arreglo);
                    buttonMostrarNumeros.disabled = false;
                }
            }
        }
    }
});

buttonMostrarNumeros.addEventListener("click", function() {
    let contenedorDeNumeros = document.getElementById("listaValores");
    contenedorDeNumeros.innerHTML = "";
    for(let i=0; i < arreglo.length; i++) {
        contenedorDeNumeros.innerHTML += `<li class="list-group-item">El numero en el indice ${i} es ${arreglo[i]}</li>`;
    }
    arreglo = [];
});