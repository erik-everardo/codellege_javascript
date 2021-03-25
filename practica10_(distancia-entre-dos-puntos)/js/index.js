const campoCoordenadaA = document.getElementById("coordenada-a");
const campoCoordenadaB = document.getElementById("coordenada-b");
const botonCalcular = document.getElementById("boton-calcular");
const contenedorRespuesta = document.getElementById("distancia");

botonCalcular.addEventListener("click", function () {

    // como recibo las coordenadas con este formato (x,y), es necesario separar los valores
    let coordenadaA = String(campoCoordenadaA.value).split(",");
    let coordenadaB = String(campoCoordenadaB.value).split(",");

    // pero los valores de los arrays regresados por String.split siguen siendo Strings, así
    // que hay que convertirlos a Number
    coordenadaA.forEach(function (value, index) {
        coordenadaA[index] = Number(value);
    });

    coordenadaB.forEach(function (value, index) {
        coordenadaB[index] = Number(value);
    });

    // X y Y se guardan en el arreglo así: [valorX, valorY]

    // los valores deben ser positivos o 0 (cuadrante positivo)
    if (coordenadaB[0] < 0 || coordenadaB[1] < 0 || coordenadaA[0] < 0 || coordenadaA[1] < 0) {
        alert("Por favor, que sea en el cuadrante positivo");
    } else {
        contenedorRespuesta.innerHTML = `La distancia 
        entre (${coordenadaA[0]},${coordenadaA[1]}) y (${coordenadaB[0]},${coordenadaB[1]}) es: 
        <b>${calcularDistanciaEntreAyB(coordenadaA[0], coordenadaA[1], coordenadaB[0], coordenadaB[1])}</b>`;
    }
});

function calcularDistanciaEntreAyB(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}