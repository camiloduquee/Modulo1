'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [1];
  for (var i = 2; i < num+1; i++) {
      if (num % i === 0) 
          {
            array.push(i);
            num = num/i;
            i=i-1;
          }
      }
  return array;
}  
//.log(factorear(2000000))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 0; i < array.length-1; i++){
        
      for(var x = 0; x < array.length-i; x++)
        {
        if(array[x] > array[x+1]){
          var temp = array[x]; 
            array[x] = array[x+1];
            array[x+1] = temp;
        }
      }
  }
  return array;
}
//console.log(bubbleSort([5, 1, 4, 2, 8, 9, 6, 30,7,21,10,100,3,99,12,13,55,19]));


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1
    let temp = array[i]
    while (j >= 0 && array[j] > temp) {
       array[j + 1] = array[j]
       j--
    }
    
    array[j+1] = temp
  }
  return array;
}
//console.log(insertionSort([5, 1, 4, 2, 8, 9, 6, 30,7,21,10,10,3,99,12,13,55,19]));


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < array.length; j++){
        if(array[j] < array[min]) {
            min=j; 
        }
     }
     if (min != i) {
         // Swapping the elements
         let tmp = array[i]; 
         array[i] = array[min];
         array[min] = tmp;      
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
