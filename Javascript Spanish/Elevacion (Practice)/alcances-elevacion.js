function funcion_afuera(){
    const numero1 = 5;
    const numero2 = 10;

    const resultado = funcion_dentro();

    function funcion_dentro(){
        return numero1 + numero2
    }

    return resultado;
}

console.log(funcion_afuera());
// function afuera(x, y){

//     function dentro(x,y ){
//         return  x + y;

//     }
    
//     const resultado = dentro(5,5)

//     return resultado;

// }

// console.log(afuera(10, 100));
// console.log(afuera(5,7));
Argumentos(2);
