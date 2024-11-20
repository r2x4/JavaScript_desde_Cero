// Decimal: 0,1,2,3,4,5,6,7,8,9
// Binario 0,1
// bit: 0 1
// Bite : 08 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6

//Se crean los Bytes 
console.log(1 | 3);// Byte de 3
console.log(1 | 4);// Byte de 5
console.log(3 | 5);// Byte de 7

console.log(1 & 3);// Byte de 1
console.log(1 & 4);// Byte de 0
console.log(3 & 5);// Byte de 1