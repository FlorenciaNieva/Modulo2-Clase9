// Consigna:
// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con un color de fondo rojo.

const correcto = document.getElementById('boton-correcto');
const incorrecto1 = document.getElementById('boton-incorrecto1');
const incorrecto2 = document.getElementById('boton-incorrecto2');
const textoCorrecto = document.getElementById('textoCorrecto')
const textoIncorrecto = document.getElementsByClassName('textoIncorrecto')

const verdadero = (correcto, textoCorrecto) => {
    correcto.style.backgroundColor = 'green';
    textoCorrecto.innerText = '¡Correcto!'
}

const falso1 = (incorrecto1, textoIncorrecto) => {
    incorrecto1.style.backgroundColor = 'red';
    textoIncorrecto[0].innerText = '¡Le erraste!'
}

const falso2 = (incorrecto2, textoIncorrecto) => {
    incorrecto2.style.backgroundColor = 'red';
    textoIncorrecto[1].innerText = '¡Le erraste!'
}

correcto.addEventListener('click', () => verdadero(correcto, textoCorrecto));

incorrecto1.addEventListener('click', () => falso1(incorrecto1, textoIncorrecto));

incorrecto2.addEventListener('click', () => falso2(incorrecto2, textoIncorrecto));