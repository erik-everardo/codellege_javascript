const campoLadoA = document.getElementById("lado-a");
const campoLadoB = document.getElementById("lado-b");
const campoLadoC = document.getElementById("lado-c");
const botonCalcularArea = document.getElementById("boton-calcular");
const contenedorRespuesta = document.getElementById("area");

botonCalcularArea.addEventListener("click", function() {
    let a = Number(campoLadoA.value);
    let b = Number(campoLadoB.value);
    let c = Number(campoLadoC.value);

    contenedorRespuesta.innerHTML = `El área del triángulo es: ${calcularArea(a, b, c)}`;
});

function calcularArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt((s * (s - a) * (s - b) * (s - c)));
}