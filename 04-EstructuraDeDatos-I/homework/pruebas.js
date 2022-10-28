const { queue } = require("@11ty/eleventy-cache-assets");

//----------------Ejercicio 1-------------
function factorial(num){
    if(num<0){
        return null;
    }
    else if(num<=1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
    
}
//console.log(factorial(5));
//----------------Ejercicio 2------------

function suma(num){
    console.log(num);
    if(num<0){
        return null;
    }
    if(num<=1){
        return 1;
    }
   
    return num + suma(num-1);
    
}
//console.log(suma(4));
//-------------Ejercico 3 -------------

function nFibonacci(n) {
var arr = [0,1];
    for(var i = 2; i <= n; i++ ){
        if(n < 0){
            return null;
        }
        else if(n === 1){
            return 1;
        }
        else{
            var x = arr[i-1]+arr[i-2];
            arr.push(x);
        }
    }
return arr[n]; 
}
//console.log(nFibonacci(6));
//-------------Ejercico 4 fibonachi con recursion -------------

function nFibonacciRecur(n) {
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return nFibonacciRecur(n - 1) + nFibonacciRecur(n - 2);
    
}
//console.log(nFibonacciRecur(0));

//-------------Ejercico 5 --------------------------
//un queue

class Queue {
            constructor() {
                this.elements = {};
                this.head = 0;
                this.tail = 0;
            }
            enqueue(element) {
                if(element===0){
                    return undefined;
                }
                else{
                    this.elements[this.tail] = element;
                    this.tail++;
                }
                
            }
            dequeue() {
                if(Object.entries(this.elements).length === 0){  //verifica si un objeto esta vacio 
                    return undefined;
                  }
                else
                  {
                    const item = this.elements[this.head];
                delete this.elements[this.head];
                this.head++;
                return item;
                  }
            }
            peek() {
                return this.elements[this.head];
            }
            get length() {
            
                 return this.tail - this.head;
                  
            }  
            get isEmpty() {
                return this.length === 0;
            }
  }
  
let q = new Queue();
//   for (let i = 1; i <= 7; i++) {
//         q.enqueue(i);
//     }
q.enqueue(0);
q.enqueue(0);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

  
  // get the current item at the front of the queue
  console.log(q.peek()); // 1
  
  // tamaño del queue
  console.log(q.length); // 7
  
  // saca en pantalla todos los elementos 
  while (!q.isEmpty) {
    console.log(q.dequeue());
  }