let btnCalcularCosto = document.getElementById("btnCalcular");
let costoPorMetro = document.getElementById("costoMaterial");
let anchoPared = document.getElementById("anchoPared");
let altoPared = document.getElementById("altoPared");
let containerRespuesta = document.getElementById("resultado");

btnCalcularCosto.addEventListener("click", function() {
    let respuesta = Number(costoPorMetro.value) * Number(anchoPared.value) * Number(altoPared.value);
    containerRespuesta.innerHTML = `<em>El resultado es </em> ${respuesta}`;
});