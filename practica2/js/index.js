
let numero1Input = document.getElementById("numero1");
let numero2Input = document.getElementById("numero2");

let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btnDividir = document.getElementById("btnDividir");

let containerResult = document.getElementById("response");

btnSumar.addEventListener("click", function() {
    let result = Number(numero1Input.value) + Number(numero2Input.value);
    console.log(result);
    containerResult.innerHTML = result;
});
btnRestar.addEventListener("click", function() {
    let result = Number(numero1Input.value) - Number(numero2Input.value);
    console.log(result);
    containerResult.innerHTML = result;
});
btnMultiplicar.addEventListener("click", function() {
    let result = Number(numero1Input.value) * Number(numero2Input.value);
    console.log(result);
    containerResult.innerHTML = result;
});
btnDividir.addEventListener("click", function() {
    let result = Number(numero1Input.value) / Number(numero2Input.value);
    console.log(result);
    containerResult.innerHTML = result;
});