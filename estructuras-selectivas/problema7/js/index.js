(function() {
    let numeroEnString = prompt("Ingresa un numero de 3 digitos");
    if(numeroEnString.length === 3) {
        if(numeroEnString.charAt(0) === numeroEnString.charAt(2)) {
            alert("El numero es igual al reves");
        } else {
            alert("El numero no es igual al reves");
        }
    } else {
        alert("Ingresa un numero que sea de 3 digitos. F5 para recargar👍");
    }
})();