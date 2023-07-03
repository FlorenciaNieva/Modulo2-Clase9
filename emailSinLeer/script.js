// Consigna:
// Crear un documento html que tenga:
// un título h1 que diga: Mis emails
// un título h2 que diga: Bandeja de entrada
// una lista desordenada con 10 ítems con lorem ipsum (4 o 5 palabras cada uno, no un párrafo entero)
// Inicialmente los ítems deben estar en negrita y con color negro. Cuando se clickea uno de ellos, se debe sacarle la negrita y ponerle un color gris (simulando que el email fue leído)

const items = document.getElementsByClassName('items');

items[0].style.fontWeight = '700';
items[1].style.fontWeight = '700';
items[2].style.fontWeight = '700';
items[3].style.fontWeight = '700';
items[4].style.fontWeight = '700';
items[5].style.fontWeight = '700';
items[6].style.fontWeight = '700';
items[7].style.fontWeight = '700';
items[8].style.fontWeight = '700';
items[9].style.fontWeight = '700';

const leido0 = (items) => {
    items[0].style.fontWeight = '0';
    items[0].style.color = 'gray';
}
const leido1 = (items) => {
    items[1].style.fontWeight = '0';
    items[1].style.color = 'gray';
}
const leido2 = (items) => {
    items[2].style.fontWeight = '0';
    items[2].style.color = 'gray';
}
const leido3 = (items) => {
    items[3].style.fontWeight = '0';
    items[3].style.color = 'gray';
}
const leido4 = (items) => {
    items[4].style.fontWeight = '0';
    items[4].style.color = 'gray';
}
const leido5 = (items) => {
    items[5].style.fontWeight = '0';
    items[5].style.color = 'gray';
}
const leido6 = (items) => {
    items[6].style.fontWeight = '0';
    items[6].style.color = 'gray';
}
const leido7 = (items) => {
    items[7].style.fontWeight = '0';
    items[7].style.color = 'gray';
}
const leido8 = (items) => {
    items[8].style.fontWeight = '0';
    items[8].style.color = 'gray';
}
const leido9 = (items) => {
    items[9].style.fontWeight = '0';
    items[9].style.color = 'gray';
}


items[0].addEventListener('click', () => leido0(items));
items[1].addEventListener('click', () => leido1(items));
items[2].addEventListener('click', () => leido2(items));
items[3].addEventListener('click', () => leido3(items));
items[4].addEventListener('click', () => leido4(items));
items[5].addEventListener('click', () => leido5(items));
items[6].addEventListener('click', () => leido6(items));
items[7].addEventListener('click', () => leido7(items));
items[8].addEventListener('click', () => leido8(items));
items[9].addEventListener('click', () => leido9(items));
