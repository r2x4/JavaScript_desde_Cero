// hay varios loop : while, do while, for, for in y el for of
// numeros pares


let i = 0;
while (i < 10) {
    if (i % 2 == 0){
        console.log('Numero Par', i);
    }
    i++;// se coloca para evitar un bucle infinito
}
 console.log('Fuera del while');