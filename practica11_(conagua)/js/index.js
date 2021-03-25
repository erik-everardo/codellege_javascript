const campoPrecio = document.getElementById("precio");
const campoMetrosCubicos = document.getElementById("cantidad-a-pagar");
const botonCalcular = document.getElementById("boton-calcular");
const contenedorTotalAPagar = document.getElementById("pagar");

botonCalcular.addEventListener("click", function() {
    let precioDelMetroCubico = Number(campoPrecio.value);
    let cantidad = Number(campoMetrosCubicos.value);

    if(isNaN(precioDelMetroCubico) || precioDelMetroCubico <= 0) {
        alert("Por favor, ingrese el precio correctamente (mayor a 0)");
    } else {
        if(cantidad < 0) {
            alert("La cantidad de metros cúbicos no puede ser negativa!!");
        } else {
            contenedorTotalAPagar.innerHTML = `Total: <b>$${precioDelMetroCubico * cantidad}</b>`;
        }
        
    }
});