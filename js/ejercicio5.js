/*5- Definir una función que muestre información sobre una cadena de 
texto que se le pasa como argumento. A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, sólo 
por minúsculas o por una mezcla de ambas.*/

function determinarTexto(cadena) {
  //minusculas
  if (cadena === cadena.toLowerCase()) {
    document.write(`<h2>La frase ingresada esta escrita en minusculas</h2>
            ${cadena}`); //mayusculas
  } else if (cadena === cadena.toUpperCase()) {
    document.write(`<h2> La frase ingresada esta escrita en mayusculas</h2>
            ${cadena}`);
  } else {
    //mixto

    document.write(`<h2>La frase ingresada esta escrita tanto con MAYUSCULAS, como con MINUSCULAS </h2>
            ${cadena}`);
  }
}

let cadena;

cadena = prompt("Ingrese una frase");
determinarTexto(cadena);
