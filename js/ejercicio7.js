/*7- Escriba un script que muestre la tabla de multiplicar de un número 
ingresado por pantalla, la creación de la tabla debe ser realizada con una 
función y mostrar solo los resultados del 1 al 10 del número elegido por el 
usuario.
*/

function tabla(num) {
  document.write(`<h2>Tabla del ${num}</h2>`);
  for (let index = 1; index <= 10; index++) {
    let resultado = index * num;
    document.write(`<br> ${index} X ${num} = ${resultado}`);
  }
}
tablaMultiplicar = [];
let num = parseInt(prompt("Ingrese un número"));
tabla(num);
