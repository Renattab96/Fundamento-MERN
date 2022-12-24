//Ejercicio 1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

/*Resultado  Tesla 
        Mercedes*/

 //Ejercicio 2

//  const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// Resultado  Error de Referencia 

//Ejercicio 3 


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword); la variable no se definio

/*Resultado  12345
            undefined*/

//Ejercicio 4

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// //console.log(first)  2
// const [,,,second] = numbers;
// //console.log(second)  5
// const [,,,,,,,,third] = numbers;//
// //console.log(third)    2
// //Predict the output
// console.log(first == second);//2 == 5 > False
// console.log(first == third); //2 == 2 >  true 


/*Resultado  False 
            True*/

//Ejercicio 5

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;  
// const { secondKey } = lastTest; //1

// const [ ,willThisWork] = secondKey;//

// //Predict the output
// console.log(key); //value
//  console.log(secondKey);//[1, 5, 1, 8, 3, 3]
//  console.log(secondKey[0]);//1
//  console.log(willThisWork);//5

/*Resultado [1, 5, 1, 8, 3, 3]
                1
                5*/