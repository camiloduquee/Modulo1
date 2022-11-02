"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;

}
BinarySearchTree.prototype.size = function(){
  if(!this.left  && !this.right) {
    return 1;
  }
  if(this.left && this.right){
    return 1 + this.left.size() + this.right.size();
  }
  if(this.left){
    return 1 + this.left.size();
  }
  if(this.right){
    return 1 + this.right.size();
  }  
};
//insertar los nodos de mi arbol
BinarySearchTree.prototype.insert = function(value){
  if(value < this.value){
    if(!this.left){ //izquierda
      this.left = new  BinarySearchTree(value);
    }
    else{
      this.left.insert(value);
    }
  }else {
    if(!this.right){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(target){
  if(target === this.value){
    return true;
  }
  if(target < this.value){
    if(!this.left)return false;
    return this.left.contains(target);
  }
  if(!this.right)return false;
  return this.right.contains(target);
};
//Recibe un callback
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === "pre-order"){
    //this.value - left -righ
    cb(this.value); //caso base
    if(this.left){ //llamado recursivo
       this.left.depthFirstForEach(cb, order);
    }
    if(this.right){
      this.right.depthFirstForEach(cb, order);
   }
  }
  else if(order === "in-order" || order === undefined){
    // left -this.root - right
    if(this.left){ //llamado recursivo
       this.left.depthFirstForEach(cb, order);
    }
    cb(this.value); //caso base
    if(this.right){
      this.right.depthFirstForEach(cb, order);
    }
  }
  else if(order === "pos-order"){
    //this.value - left -righ
    
    if(this.left){ //llamado recursivo
       this.left.depthFirstForEach(cb, order);
    }
    if(this.right){
      this.right.depthFirstForEach(cb, order);
   }
   cb(this.value); //caso base
  }
  
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  cb(this.value);
  if(this.left){
    array.pus(this.left);
  }
  if(this.right){
    array.push(this.right);
  }
  if(array.length > 0){ //caso base
    array.shift().breadthFirstForEach(cb,array);  //llamado recursivo
  }
};

//var myTree = new BinarySearchTree(8);
//console.log(myTree);

//myTree.depthFirstForEach("post-order");




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
