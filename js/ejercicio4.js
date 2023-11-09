/*4- Escribir el código de una función a la que se pasa como parámetro 
un número entero y devuelve como resultado una cadena de texto que indica 
si el número es par o impar. Mostrar por pantalla el resultado devuelto 
por la función.*/

function paridad(numEntero) {
    if (numEntero%2===0) {
        document.write(`<h2>El número ingresado ${numEntero} es PAR</h2>`);
    } else {
        document.write(`<h2>El número ingresado ${numEntero} es IMPAR</h2>`);
    }
}

let numEntero = 0;

numEntero=parseInt(prompt("Ingrese un número entero"));
paridad(numEntero);

