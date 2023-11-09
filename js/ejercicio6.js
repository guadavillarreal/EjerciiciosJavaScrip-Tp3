/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:    Input:  lado A = 24     lado B = 5
            Output: 58 */

function perimetroRectangulo(base, altura) {
  let perimetro = 2*(base + altura);
  document.write(`<h2> El perimetro del rectangulo es: </h2> ${perimetro}`);
}

let base = 0;
let altura = 0;

base = parseInt(prompt("Ingrese la base del rectangulo"));
altura = parseInt(prompt("Ingrese la altura del rectangulo"));
perimetroRectangulo(base, altura);
