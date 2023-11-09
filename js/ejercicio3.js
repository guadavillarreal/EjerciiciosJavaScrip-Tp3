/*3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar 
el resultado de lanzar dos dados y anotar en un array el número de 
apariciones de dicha suma, repitiendo 50 veces esta operación.
    Ejemplo de salida:(ver img del tp)*/

const lanzamientos = [];
const apariciones = [];
let resultados = 0;
let sumaresultados = 0;

for (let index = 0; index < 50; index++) {
  let numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
  let numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;
  let suma = numeroAleatorio1 + numeroAleatorio2;
  lanzamientos.push(suma);
  console.log(lanzamientos);
  document.write(lanzamientos[index].includes(suma));
}
// for (let index = 0; index < lanzamientos.length; index++) {  
// }
document.write(lanzamientos);
//   //filtra las apariciones de los resultados
//lanzamientos.filter((lanzamiento) => lanzamiento === suma)
// if ( apariciones = lanzamientos.find(item)=> item === suma) {
//   resultados++;
//   apariciones.push(sumaresultados);
// }
// console.log(lanzamientos);
// console.log(suma);

// //muestra lanzamientos
// document.write(`La lista de Lanzamientos:`);
// document.write(`<ul>`);
// for (let index = 0; index < lanzamientos.length; index++) {
//   document.write(`<li> ${lanzamientos[index]} </li>`);
// }
// document.write(`</ul>`);

// document.write(`<h2>Apariciones:</h2>`);
// document.write(`<ul>`);
// for (let index = 0; index < apariciones.length; index++) {
//   document.write(`<li> ${apariciones[i]}`);
// }
// document.write(`</ul>`);
