function Node(value){
    this.value = value;
    this.next = null;
}
function LinkedList(){
    this.head = null;
    
}
//Agregar Nodos a mi lista
LinkedList.prototype.add = function(data){
    var node = new Node(data);  //creo el nodo
    var current = this.head;

    // esta condicion es cuando no tengo un nodo asociado a mi head 
    if(!current){
        this.head = node;
        this._length++;

        return node;
    }
    // si tengo ya un nodo asociado este lo reccore y agrega el siguiente nodo a la posicion de memoria 
    //si current tiene algo osea true entra en el ciclo si no pues no entrara
    while(current.next){
        current = current.next;  
    }

    current.next = node;
    this._length++;

    return node;
}
// - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
LinkedList.prototype.remove = function(){
    var current = this.head;

    if(!this.head) return null;
    
    else if(current && !current.next){
        var aux = current.value;
        current = null;
        return aux;
    }

    while(current.next.next){
        current = current.next;
        
    }
    var aux = current.next.value;
    current.next = null;
    return aux;
}
LinkedList.prototype.getAll = function(){
    current = this.head;

    if(!current){
      return console.log("la lista esta vacia!");
      
    }
    while(current){
        console.log(current.data);
        current = current.next;
    }
    return;
}
var myList = new LinkedList();

// var unNodo = new Node(3);
// listaDeCompras.head = unNodo;

// var dosNodo = new Node(10);
// listaDeCompras.head.next = dosNodo;

// var tresNodo = new Node(15);
// listaDeCompras.head.next.next = tresNodo;

//console.log(listaDeCompras);

//listaDeCompras.add(30);
myList.add("first");
myList.add("second");
console.log(myList);

//listaDeCompras.getAll();


