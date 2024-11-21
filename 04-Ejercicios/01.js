function cualEsMayor(a, b){
    return (a > b) ? a : b; //Manera corta forma ternario

    // if (a > b){ manera larga 
    //     return a;
    // } else (a < b);
    //     return b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);