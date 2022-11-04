
function Node(data){
    this.data = data;
    this.next = null;
}
function List(){
    this._length = 0;
    this.head = null;
}
List.prototype.add = function(data){
    var nodo = new Node(data);
    var current = this.head;

    if(!current){
        this.head = node;
        this._length++;

        return node;
    }
    while(current.next){

    }

    current.next = node;
    this._length++;

    return node;
}

var listaDeCompras = new list();

var unNodo = new Node(571);