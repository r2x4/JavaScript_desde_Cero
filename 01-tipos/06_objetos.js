
let nombre = 'Tanjiro';
let anime = 'Demon Slayer';
let edad = 16;

let personaje = {//objeto literal
    nombre: 'Tanjiro',//esto se llama par llave valor
    anime: 'Demon Slayer',
    edad: 16     //ultima linea se deja sin coma 
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);