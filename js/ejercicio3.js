/*3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar 
el resultado de lanzar dos dados y anotar en un array el número de 
apariciones de dicha suma, repitiendo 50 veces esta operación.
    Ejemplo de salida:(ver img del tp)*/

const lanzamientos = [];
// const apariciones = [];
// let resultados = 0;
// let suma = 0;
// let sumaresultados = 0;
// let numeroAleatorio1 = 0;
// let numeroAleatorio2 = 0;

for (let index = 0; index < 50; index++) {
  numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
  numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;
  suma = numeroAleatorio1 + numeroAleatorio2;
  lanzamientos.push(suma);
}
console.log(lanzamientos);
//   //filtra las apariciones de los resultados
//   if (lanzamientos.filter( (lanzamiento)=> lanzamiento === suma)) {
//     resultados++;
//     apariciones.push(sumaresultados);
//   }
//muestra lanzamientos
document.write(`La lista de Lanzamientos:`);
document.write(`<ul>`);
for (let index = 0; index < lanzamientos.length; index++) {
  document.write(`<li> ${lanzamientos[i]} `);
}
document.write(`</ul>`);

// document.write(`<h2>Apariciones:</h2>`);
// document.write(`<ul>`);
// for (let index = 0; index < apariciones.length; index++) {
//   document.write(`<li> ${apariciones[i]}`);
// }
// document.write(`</ul>`);
