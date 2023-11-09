/*2-  Crear un script que solicite al usuario mediante un 
prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el 
arreglo generado, luego realizar las siguientes acciones:
  1-Mostrar la longitud del arreglo.
  2-Mostrar en el documento web los ítems de las posiciones 
  primera, tercera y última.
  3-Añade en última posición la ciudad de París.--
  4-Escribe por pantalla el elemento que ocupa la segunda 
  posición.---
  5-Sustituye el elemento que ocupa la segunda posición por 
  la ciudad de 'Barcelona'.
Ejemplo:  Input: [‘Nueva York, Estados Unidos’, ‘Barcelona, 
  España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, 
  Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, 
  ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, 
  ‘El Cairo, Egipto’]
          Output: (ver img del tp)*/

const ciudades = [];
let ciudad;

ciudad = prompt("Ingrese una ciudad");
ciudades.unshift(ciudad);

while (confirm("¿Desea seguir agregando ciudades?")) {
  ciudad = prompt("Ingrese una ciudad");
  ciudades.push(ciudad);
}

document.write(
  `<h3>El arreglo de ciudades tiene ${ciudades.length} elementos</h3>`);

document.write(`<h3>Posiciones de elementos: </h3>
<ul>
<li>Primera posición: ${ciudades[0]}</li>
<li>Tercera posición: ${ciudades[2]}</li>
<li>Ultima posición: ${ciudades[ciudades.length - 1]}</li>
</ul>`);

ciudades.push("Paris");
document.write(`<h4>Ultima posición: ${ciudades[ciudades.length - 1]}</h4>`);
//verificar que ponga el punto el li
document.write(`<br><li>Segunda posición: ${ciudades[1]}</li><br>`);

ciudades[1] = "Barcelona";
document.write(`<h2>Arreglo de ciudades: </h2>`);
document.write(`<ul>`);
for (let index = 0; index < ciudades.length; index++) {
  document.write(`<li> Elemento: ${ciudades[index]}</li>`);
}
document.write(`</ul>`);
