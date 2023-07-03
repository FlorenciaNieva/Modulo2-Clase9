// Consigna:
// Repetir el ejercicio de imagenes, pero en vez de cambiar la imagen grande cuando se clickean las imágenes chicas, hacerlo cuando se pasa el mouse por encima de las imágenes chicas.

const img1 = document.getElementById('img-chica1');
const img2 = document.getElementById('img-chica2');
const img3 = document.getElementById('img-chica3');
const imgGrande = document.getElementById('img-grande');

img1.style.height = '100px';
img2.style.height = '100px';
img3.style.height = '100px';
imgGrande.style.height = '500px';

const imagen1 = (imgGrande) => {
    imgGrande.setAttribute('src', 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80');
}
const imagen2 = (imgGrande) => {
    imgGrande.setAttribute('src', 'https://img3.wallspic.com/previews/3/3/1/6/6/166133/166133-playa-las_playas_de_hawai-agua-los_recursos_de_agua-paisaje_natural-x750.jpg');
}
const imagen3 = (imgGrande) => {
    imgGrande.setAttribute('src', 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/10/29/5fa5343345a4c.jpeg');
}


img1.addEventListener('mouseover', () => imagen1(imgGrande));
img2.addEventListener('mouseover', () => imagen2(imgGrande));
img3.addEventListener('mouseover', () => imagen3(imgGrande));