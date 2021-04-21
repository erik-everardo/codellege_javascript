// 13.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo uva, la cual se 
// clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, esta es 
// de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega 
// un embarque, considerando lo siguiente:
//     Si es tipo A, se le cargan 20c al precio inicial cuando es de tamaño 1; y 30c cuando es de tamaño 2.
//     Si es tipo B, se rebajan 30c cuando es de tamaño 1, y 50c cuando es de tamaño 2

const btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", function() {
    let tipo = document.getElementById("tipo").value;
    let tamano = document.getElementById("tamano").value;
    let precio = Number(document.getElementById("precioInicial").value);

    // lo hice con switch solo para variar
    switch(tipo) {
        case "A": switch(tamano) {
                case "1": precio += 0.20; break;
                case "2": precio += 0.30; break;
            }; break;
        case "B": switch(tamano) {
            case "1": precio -= 0.30; break;
            case "2": precio -= 0.50; break;
        }; break;
    }

    document.getElementById("respuesta").innerHTML = `<div class="alert alert-info">El kilo de la uva debe costar $${precio}</div>`;
    
});