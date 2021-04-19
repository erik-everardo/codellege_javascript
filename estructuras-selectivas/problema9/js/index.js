// 9. Desarrolle una solución que pida al usuario 2 números y diga si uno es múltiplo del otro.

const btnIniciar = document.getElementById("btnIniciar");

btnIniciar.addEventListener("click", function(){
    let numero1 = Number(prompt("Ingresa numero"));
    let numero2 = Number(prompt(`Ingresa numero para compribar si es multiplo de ${numero1}`));
    if(esMultiploDe(numero1,numero2)){
        alert(`${numero2} es multiplo de ${numero1}`);
    } else {
        alert(`${numero2} no es multiplo de ${numero1}`);
    }
});


function esMultiploDe(a,b) {
    return a%b === 0;
}