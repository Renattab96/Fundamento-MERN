// function funcion_afuera(){
//     const numero1 = 5;
//     const numero2 = 10;

//     const resultado = funcion_dentro();

//     function funcion_dentro(){
//         return numero1 + numero2
//     }

//     return resultado;
// }

// console.log(funcion_afuera());
// // function afuera(x, y){

// //     function dentro(x,y ){
// //         return  x + y;

// //     }
    
// //     const resultado = dentro(5,5)

// //     return resultado;

// // }

// // console.log(afuera(10, 100));
// // console.log(afuera(5,7));
// Argumentos(2);

/*Hoist de JavaScript*/
/**Ejercicio 1 */
// console.log(hello);                                   
// var hello = 'world';   

/**Resultado no se declaro la variable  
 * ReferenceError: Argumentos is not defined
 */

/**Ejercicio 2 */

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
/**Resultado 
 * magnet
*/


/**Ejercicio 2 */

// var brendan = 'super cool';
 
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }// no se llamo a la funcion para que se ejecute por eso no cambio el valor inicial
// console.log(brendan);

/**Resultado 
 * super cool
*/

/**Ejercicio 3*/
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';// se cammbiovalor pero no se imprimio los cambios  luego de esta linea console.log(food) imprime gone

// }
/**Ejercicio 4 
 * chicken
 * half-chiken
 
*/



/**Ejercicio 5 */
// mean();
// // console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food); //mean no esta definido 

/**Ejercicio 6 */

// console.log(genre);
// var genre = "disco";//undefined primeri se debe daclarar el valor de la variable para imprimir 
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);//rosck
//     var genre = "r&b";
//     console.log(genre);//ryb
// }
// console.log(genre); //disco

/**Resultado /undefined primeri se debe daclarar el valor de la variable para imprimir
 *  rosck
 * ryb
 * disco
 */

/**Ejercicio 7 */

// dojo = "san jose";
// console.log(dojo); // San jode
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo); //seatle
//     var dojo = "burbank";
//     console.log(dojo); //burbannk
// }
// console.log(dojo); ///san jose

/**
 * Resultado: san jose 
 * seatle
 * burbank
 * san jose
 */



/**8 - Bonus ES6: const */

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// // const dojo = {};
// function makeDojo(name, students){//no se llamo a la funcion para que se ejecute
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
/**{ name: 'Chicago', students: 65, hiring: true } */
