const campoMontoDiarioHotel = document.getElementById("monto-hotel");
const campoMontoDiarioComida = document.getElementById("monto-comida");
const campoNumeroDeDías = document.getElementById("num-dias");
const boton = document.getElementById("calcular");
const celdaPrecioHotel = document.getElementById("precio-hotel");
const celdaTotalHotel = document.getElementById("total-hotel");
const celdaPrecioComida = document.getElementById("precio-comida");
const celdaTotalComida = document.getElementById("total-comida");
const celdaTotalVarios = document.getElementById("total-varios");
const celdaDescripcionTotal = document.getElementById("descripcion-total");
const celdaTotal = document.getElementById("total");

boton.addEventListener("click", calcular);
campoNumeroDeDías.addEventListener("input", calcular);
campoMontoDiarioComida.addEventListener("input", calcular);
campoMontoDiarioHotel.addEventListener("input", calcular);

function calcular() {
    let montoDiarioHotel = Number(campoMontoDiarioHotel.value);
    let montoDiarioComida = Number(campoMontoDiarioComida.value);
    let dias = Number(campoNumeroDeDías.value);
    let totalHotel = montoDiarioHotel * dias;
    let totalComida = montoDiarioComida * dias;
    let totalVarios = 100 * dias;
    let total = totalComida + totalHotel + totalVarios;

    celdaPrecioHotel.innerHTML = `$${montoDiarioHotel}`;
    celdaTotalHotel.innerHTML = `$${totalHotel}`;
    celdaPrecioComida.innerHTML = `$${montoDiarioComida}`;
    celdaTotalComida.innerHTML = `$${totalComida}`;
    celdaTotalVarios.innerHTML = `$${100 * dias}`;
    celdaDescripcionTotal.innerHTML = `$${montoDiarioComida + montoDiarioHotel + 100} x ${dias} días`;
    celdaTotal.innerHTML = `$${total}`;
}