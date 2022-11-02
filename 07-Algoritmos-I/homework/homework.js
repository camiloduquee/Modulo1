'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // var array = [1];
  // var operaciones = 0;
  // for (var i = 2; i < num+1; i++) {
  //     if (num % i === 0) 
  //         {
  //           array.push(i);
  //           num = num/i;
  //           i=i-1;
  //           operaciones++;
  //         }
  //     }
  //     console.log(operaciones);
  // return array;

// codigo de otra forma con un while

 var factores = [1];
 var i = 2;
 while(num !== 1){
     if(num % i === 0){
       factores.push(i);
       num = num / i;
     }else{
       i++;
     }
   }
   return factores;

}  
console.log(factorear(180));

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // for(var i = 0; i < array.length-1; i++){
        
  //     for(var x = 0; x < array.length-i; x++)
  //       {
  //       if(array[x] > array[x+1]){
  //         var aux = array[x]; 
  //           array[x] = array[x+1];
  //           array[x+1] = aux;
  //       }
  //     }
  // }
  // return array;

//Compara de a dos elementos, el ultimo es el que ya queda como numero mayor
var cambio = true; //mi bandera para saber si entra o no en el ciclo si es false ya deja de ejecutarce
while(cambio){
  cambio = false;
  for (let i = 0; i < array.length - 1; i++) { //se poone el array.length - 1 porque debe analizar el penultimo numero con el ultimo 
    if(array[i] > array[i + 1]){
      var aux = array[i];
      array[i] = array[i + 1];
      array[i + 1] = aux;
      cambio = true;
    }
  }
}
return array;
}
console.log(bubbleSort([5, 1, 4, 2, 8, 9, 6, 30,7,21,10,100,3,99,12,13,55,19]));


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
//Ejercicio como lo planteo
  // for (let i = 1; i < array.length; i++) {
  //   let j = i - 1
  //   let temp = array[i]
  //   while (j >= 0 && array[j] > temp) {
  //      array[j + 1] = array[j]
  //      j--;
  //   }
    
  //   array[j+1] = temp
  // }
  // return array;
//[1 , 2 , 3 , 4, 5]
//        |i
//    |j
//otra manera de plantear el ejercicio ,recordar que arraca en la posicion 1
for (let i = 1; i < array.length; i++){
  var j = i - 1; //si arranco en en 1 entonces debo compararlo con el valor de antes osea j = i - 1
  var aux = array[i];
  while (j >= 0 && array[j] > aux){ //para que deje de ser true estas dos condiciones deben ser false
    //Me voy corriendo a la izquierda
    // Uso aux porque pise valor de el array[i]    
    array[j +1] = array[j];
        j--;
  }
  array [j + 1] = aux;
}
return array;
}
console.log(insertionSort([5, 1, 4, 2, 8, 9, 6, 30,7,21,10,10,3,99,12,13,55,19]));


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length - 1; i++) {
    // Finding the smallest number in the subarray
  
    var Nmin = i;
    for(let j = i + 1; j < array.length; j++){ //for para encontrar el numero mas pequeño (indice)
        if(array[j] < array[Nmin]) {
          Nmin=j; 
        }
     }
     //Hago el swap
     if (Nmin != i) {   
         // cambio el numero menor a la posicion
         var aux = array[i]; 
         array[i] = array[Nmin];
         array[Nmin] = aux;
         
    }
}
return array;
}
console.log(insertionSort([5, 1, 4, 2, 8, 9, 6,19,3]));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
