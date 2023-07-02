// Consigna:
// Crear un documento html que tenga 6 botones con un color de fondo distinto, y un div cuadrado grande. Cuando se clickea un botón, el div debe cambiar su color de fondo al mismo color de fondo que el del botón clickeado.

const rojo = document.getElementById('botonRojo');
const aqua = document.getElementById('botonAqua');
const azul = document.getElementById('botonAzul');
const amarillo = document.getElementById('botonAmarillo');
const naranja = document.getElementById('botonNaranja');
const rosado = document.getElementById('botonRosado');
const cuadrado = document.getElementById('cuadrado');
rojo.style.backgroundColor='red';

azul.style.backgroundColor='blue';
aqua.style.backgroundColor='aqua';
amarillo.style.backgroundColor='yellow';
naranja.style.backgroundColor='orange';
rosado.style.backgroundColor='pink';
cuadrado.style.border='1px solid black'
cuadrado.style.width='400px';
cuadrado.style.height='400px';
cuadrado.style.marginTop='20px'

const fondoRojo = (cuadrado) => {
    cuadrado.style.backgroundColor='red'
}
const fondoAqua = (cuadrado) => {
    cuadrado.style.backgroundColor='aqua'
}
const fondoAzul = (cuadrado) => {
    cuadrado.style.backgroundColor='blue'
}
const fondoAmarillo = (cuadrado) => {
    cuadrado.style.backgroundColor='yellow'
}
const fondoNaranja = (cuadrado) => {
    cuadrado.style.backgroundColor='orange'
}
const fondoRosado = (cuadrado) => {
    cuadrado.style.backgroundColor='pink'
}

rojo.addEventListener('click', () => fondoRojo(cuadrado));
aqua.addEventListener('click', () => fondoAqua(cuadrado));
azul.addEventListener('click', () => fondoAzul(cuadrado));
amarillo.addEventListener('click', () => fondoAmarillo(cuadrado));
naranja.addEventListener('click', () => fondoNaranja(cuadrado));
rosado.addEventListener('click', () => fondoRosado(cuadrado));