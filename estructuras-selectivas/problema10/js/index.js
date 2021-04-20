// 10.	Desarrolle una solución que pida al usuario un número entre 0 y 9,999, decir si es capicúa.
(function() {
    let numeroString = prompt("Ingrese un numero entero entre 0 y 9999");
    let numeroNumber = Number(numeroString);
    if(isNaN(numeroNumber)) {
        alert("Favor de ingresar un numero entero. F5 para recargar");
    } else if(numeroNumber > 9999) {
        alert("Favor de ingresar un numero entre 0 y 9999. Recargar página");
    } else {
        // utilizo el string para comprobar si es capicua de manera más fácil
        if(numeroString === invertirString(numeroString)) {
            alert(`El numero ${numeroString} es capicúa`);
        } else {
            alert(`El numero ${numeroString} no es capicúa`);
        }
    }
})();

function invertirString(string) {
    let array = String(string).split("");
    array = array.reverse();
    return array.join("");
}