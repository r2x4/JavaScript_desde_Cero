let user = {
    id: 1,
    name: 'Rodrigo',
    age: 44,
};

for (let prop in user){
    console.log(prop, user[prop]);// aqui se hace el arreglo ys eagrega 
}

let animales = ['Dragon', 'Perro', 'Pez'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}