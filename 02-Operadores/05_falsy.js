// short-circuit

// Falso: Estos valores se conocen como falsy
// false
// 0
//''
// null
// undefined
// NaN
let nombre = 'Rodrigo';// si los pones vacio te da anonimo si escribes dara lo que escribas
let username = nombre || 'Anonimo';
console.log(username);


function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();

