// 4.	Desarrolle una solución que nos ayude a decidir a qué lugar podrá ir de vacaciones una persona, considerando 
//     que la línea de autobuses cobra por kilómetro recorrido. Se debe considerar el costo del pasaje tanto de ida, 
//     como de vuelta; los datos que se conocen y que son fijos son: México, 750 km; P.V., 800 km; Acapulco, 1200 km, 
//     y Cancún, 1800 km. También se debe considerar la posibilidad de tener que quedarse en casa.
const btnCalcular = document.getElementById("btnCalcular");
const campoPrecioPorKm = document.getElementById("precioPorKm");
const campoPresupuesto = document.getElementById("presupuesto");

btnCalcular.addEventListener("click", function() {
    let precioPorKilometro = Number(campoPrecioPorKm.value);
    let presupuesto = Number(campoPresupuesto.value);
    let preciosViaje = {
        mexico: 750 * precioPorKilometro * 2,
        puertoVallarta: 800 * precioPorKilometro * 2,
        acapulco: 1200 * precioPorKilometro * 2,
        cancun: 1800 * precioPorKilometro * 2,
        casa: 0
    }

    let lugaresADondeIr = "<li>Quedarse en casa</li>";

    if(preciosViaje.mexico <= presupuesto) {
        lugaresADondeIr += `<li>México</li>`;
    }

    if(preciosViaje.puertoVallarta <= presupuesto) {
        lugaresADondeIr += "<li>Puerto Vallarta";
    }

    if(preciosViaje.acapulco <= presupuesto) {
        lugaresADondeIr += "<li>Acapulco</li>";
    }

    if(preciosViaje.cancun <= presupuesto) {
        lugaresADondeIr += "<li>Cancún</li>";
    }

    document.getElementById("aDondeIrLista").innerHTML = lugaresADondeIr;
});