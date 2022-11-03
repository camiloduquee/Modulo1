'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  // []  [5]  []
  //[1, 4, 2] [5]  [8]

var pivotIndex = Math.floor(Math.random() * array.length);
var pivot = array[pivotIndex];
var left = [];
var right = [];

//Recursion -> caso base  y llamada recursiva
if(array.length <= 1){
  return array;
}
  for (let i = 0; i < array.length; i++) {
      if(i !== pivotIndex){ //i es distinto que mi indice
        if(array[i] < pivot){
          left.push(array[i]);
        }else{
          right.push(array[i]);
        }
      }
  }
  //llamado recursivo
  return quickSort(left).concat(pivot).concat(quickSort(right));
  //       [1, 4, 2]      +     [5]       +       [8]
  //       [] + [1] + [4, 2]
  //                  [2, 4]
}
console.log(quickSort([10,2,1,9,3,4,8]));


function merge (left, right){
  var mergedArray = [];
  var leftIndex = 0;
  var righIndex = 0;

  while(leftIndex < left.length && righIndex < right.length){
        if(left[leftIndex] < right[righIndex]){
          mergedArray.push(left[leftIndex]);
          leftIndex++;
        }
        else{
          mergedArray.push(right[righIndex]);
          righIndex++;
        }
  }
  return mergedArray.concat(left.slice(leftIndex).concat(right.slice(righIndex)));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Caso base

    if(array.length === 1) return array;

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  //llamado recursivo

  return merge(mergeSort(left),mergeSort(right));

}
console.log(mergeSort([100,2,19,9,30,4,8,1,25,85,15]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
