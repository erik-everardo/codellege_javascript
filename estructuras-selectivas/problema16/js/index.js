// 16.	Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura amplia (A) y daños a terceros (B).
// Para el plan A, la cuota base es de $1,200, y para el B, de $950.00. A ambos planes se les carga el 10% del 
// costo si la persona conduce tiene por habito beber alcohol, 5% si utiliza lentes, 5% si padece alguna 
// enfermedad (deficiencia cardiaca o diabetes), y si más de 40 años se le carga el 20% de lo contrario solo 10%.

const boton = document.querySelector("#boton");
const campoTipoDeSeguro = document.querySelector("#tipo");
const campoEdad = document.querySelector("#edad");
const campoAlcohol = document.querySelector("#alcohol");
const campoLentes = document.querySelector("#lentes");
const campoEnfermedad = document.querySelector("#enfermedad");

boton.addEventListener("click", function() {
    let precio = 0;
    let tipo = campoTipoDeSeguro.value;
    let precioBase = 0;
    switch(tipo) {
        case "A": precioBase = 1200; break;
        case "B": precioBase = 950; break;
    }

    precio = precioBase;

    if(campoAlcohol.checked) precio += precioBase * 0.10;
    if(campoLentes.checked) precio += precioBase * 0.05;
    if(campoEnfermedad.checked) precio += precioBase * 0.05;

    // esto lo hago solo para aplicar el operador condicional
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    // con if sería
    // if(campoEdad.value >= 40) {
    //     precio += precioBase * 0.20;
    // } else {
    //     precio += precioBase * 0.10;
    // }

    //               condicion    // regresa esto si true // o esto si false
    precio += campoEdad.value >= 40 ? precioBase * 0.20 : precioBase * 0.10;

    document.querySelector("#respuesta").innerHTML = `<div class="alert alert-info">El precio con cargos correspondientes aplicados es $${precio}</div>`;
});