// 1. Almacenes “Don Baratón” tiene una promoción: a todos los trajes que tienen un precio superior a $3600.00 se 
//     les aplicará un descuento de 16 %, a todos los demás se les aplicará sólo 7 %. Desarrolle una solución para 
//     determinar el precio final que debe pagar una persona por comprar un traje y de cuánto es el descuento que 
//     obtendrá. 

const botonCalcularPrecio = document.getElementById("btn-calcular");

botonCalcularPrecio.addEventListener("click", function() {
    const precioNormal = Number(document.getElementById("precio").value);
    let precioConDescuento = 0;
    let descuento = "";
    if(precioNormal > 3600) {
        precioConDescuento = precioNormal * 0.84;
        descuento = "16%";
    } else {
        precioConDescuento = precioNormal * 0.93;
        descuento = "7%";
    }

    document.getElementById("respuesta").innerHTML = `<div class="alert alert-info">El precio con descuento (${descuento}) es <b>${precioConDescuento}</div>`
});