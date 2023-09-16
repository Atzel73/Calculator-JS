var num1 = 0;
var num2 = 0;
var operacion = "";



function Sumar() {
        if (operacion === "") {
            num1 = parseFloat(document.getElementById("center").textContent);
            console.log("Numero 1: " + num1);
            // Vaciar la caja de texto
            document.getElementById("center").textContent = "";
            operacion = "suma";
        }
        
}
function Restar(){
    if (operacion === "") {
        num1 = parseFloat(document.getElementById("center").textContent);
        console.log("Numero 1: " + num1);
        // Vaciar la caja de texto
        document.getElementById("center").textContent = "";
        operacion = "resta";
    }
}
function Multiplicacion(){
    if (operacion === "") {
        num1 = parseFloat(document.getElementById("center").textContent);
        console.log("Numero 1: " + num1);
        // Vaciar la caja de texto
        document.getElementById("center").textContent = "";
        operacion = "multiplicacion";
    }
}
function Division(){
    if (operacion === "") {
        num1 = parseFloat(document.getElementById("center").textContent);
        console.log("Numero 1: " + num1);
        // Vaciar la caja de texto
        document.getElementById("center").textContent = "";
        operacion = "division";
    }
}
function Resultado() {
    num2 = parseFloat(document.getElementById("center").textContent);
    console.log("Numero 2: " + num2);
    if (operacion === "suma") {
        const resultado = num1 + num2;
        console.log("Resultado: " + resultado);

        // Mostrar el resultado en el <div> y limpiar num2
        document.getElementById("center").textContent = resultado.toString();
        num2 = 0;
    }else if (operacion === "resta") {
        if (num1 > num2 || num2 > num1) {
            alert("La resta no puede ser hecha!");
            var texto = document.getElementById("center").textContent = "";
            console.log("Pantalla limpia sobre la validacion de resta");
            operacion = "";
        }
        return;
        const resultado = num1 - num2;
        console.log("Resultado: " + resultado);

        // Mostrar el resultado en el <div> y limpiar num2
        document.getElementById("center").textContent = resultado.toString();
        num2 = 0;
    } else if (operacion === "multiplicacion") {
        
        const resultado = num1 * num2;
        console.log("Resultado: " + resultado);

        // Mostrar el resultado en el <div> y limpiar num2
        document.getElementById("center").textContent = resultado.toString();
        num2 = 0;
    }else if (operacion === "division") {
        const resultado = num1 / num2;
        console.log("Resultado: " + resultado);

        // Mostrar el resultado en el <div> y limpiar num2
        document.getElementById("center").textContent = resultado.toString();
        num2 = 0;
}
}
function cleanScreen(){

var texto = document.getElementById("center").textContent = "";
        
        operacion = "";
        console.log("Pantalla limpia" + operacion);
}


document.getElementById("btnSuma").addEventListener("click", Sumar);
document.getElementById("btnResta").addEventListener("click", Restar);
document.getElementById("btnMult").addEventListener("click", Multiplicacion);
document.getElementById("btnDiv").addEventListener("click", Division);
document.getElementById("btnResult").addEventListener("click", Resultado);
document.getElementById("btnClear").addEventListener("click", cleanScreen);