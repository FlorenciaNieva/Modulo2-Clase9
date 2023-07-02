// Consigna:
// Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada

const cancion1 = prompt('Ingrese el nombre de su primera canción favoritas');
const cancion2 = prompt('Ingrese el nombre de su segunda canción favoritas');
const cancion3 = prompt('Ingrese el nombre de su tercera canción favoritas');
const cancion4 = prompt('Ingrese el nombre de su cuarta canción favoritas');
const cancion5 = prompt('Ingrese el nombre de su quinta canción favoritas');

const items = document.getElementsByClassName('item');
items[0].innerText = cancion1;
items[1].innerText = cancion2;
items[2].innerText = cancion3;
items[3].innerText = cancion4;
items[4].innerText = cancion5;