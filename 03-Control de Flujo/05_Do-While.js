let i = 0;
// while (i < 10) {
//     if (i % 2 == 0){
//         console.log('Numero Par', i);
//     }
//     i++;// se coloca para evitar un bucle infinito
// } evalua primero la condicion
do{
    if (i % 2 == 0){
        console.log('Numero Par', i);
    }
    i++; 
} while (i < 10);// ejecuta codigo y despues ejecuta condicion
    