// Desarrolle una solución que le pida al usuario un presupuesto y el precio de 4 artículos, y realice la suma, 
//     si la suma es mayor al presupuesto “El precio está fuera de presupuesto” en caso contrario “El precio está dentro 
//     del presupuesto”.

const campoPresupuesto = document.getElementById("presupuesto");
const campoPrecio1 = document.getElementById("precio1");
const campoPrecio2 = document.getElementById("precio2");
const campoPrecio3 = document.getElementById("precio3");
const campoPrecio4 = document.getElementById("precio4");
const boton = document.getElementById("calcular");

boton.addEventListener("click", function() {
    let total = 
        Number(campoPrecio1.value) + 
        Number(campoPrecio2.value) + 
        Number(campoPrecio3.value) + 
        Number(campoPrecio4.value);

    if(total <= Number(campoPresupuesto.value)) {
        alert("El precio está dentro del presupuesto");
    } else {
        alert("El precio está fuera del presupuesto");
    }
});