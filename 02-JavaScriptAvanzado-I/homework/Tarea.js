//----------- Ejercicio 1 --------------//

        // x = 1;
        // var a = 5;
        // var b = 10;
                    
        // var c = function(a, b, c) {
        //   var x = 10;
        //   console.log(x); // var equivale a 1 pero se pisa es decir se rescribe o cambia su valor a 10 ya que se define de nuevo como var x = 10;
        //   console.log(a); // a si se queda con su valor definido como 8
        //             var f = function(a, b, c) {
        //                 b = a; // a = el valor de b cambia por 8
        //                 console.log(b); //en la pantalla se ve el numero 8
        //                 b = c; // c = b es decir 8
        //                 var x = 5;
        //             }
        //   f(a,b,c);  
        //   console.log(b); // sale b como 9
        // }
        // c(8,9,10); // primera invocacion que se realiza 
        // console.log(b); // b toma el valor de la variable global
        // console.log(x); // x toma el valor de 1 ya solo se toma la variable global

//----------- Ejercicio 2 --------------//

        // console.log(bar); // no mostrara nada en pantalla ya que las variables se deben definir antes y no despues ( undefined)
        // console.log(baz);   //marcara un error 
        // foo(); // se invoca la funcion foo y se vera en la pantalla Hola 
        //     // 
        // function foo() { console.log('Hola!'); }
        // var bar = 1;
        // var baz = 2;

//----------- Ejercicio 3 --------------//

        // var instructor = "Tony";

        // if(true) { 
        //     var instructor = "Franco"; // en consola se vera franco la condicion siempre va hacer verdadera
        // }

        // console.log(instructor);

//----------- Ejercicio 4 --------------//

        // var instructor = "Tony";
        // console.log(instructor); //
        
        //     (function() {
        //     if(true) {
        //         var instructor = "Franco";
        //         console.log(instructor);
        //     }
        //     } )();
        // console.log(instructor);

//----------- Ejercicio 5 --------------//

        // var instructor = "Tony";
        // let pm = "Franco";
        // if (true) {
        //     var instructor = "The Flash"; 
        //     let pm = "Reverse Flash";
        //     console.log(instructor); // "The Flash"
        //     console.log(pm);  // "Reverse Flash"
        // }
        // console.log(instructor); // "The Flash" se reescribe
        // console.log(pm); // esta queda igual "Franco"

//----------- Ejercicio 6 --------------//

        // 6 / "3"   //devuelve 2 ya que el 3 aunque es un string lo toma como un numero js
        // "2" * "3"  // devuelve un 6 ya que aunque ambos elementos son un string los toma como un numero js
        // 4 + 5 + "px" //devuelve 9 concatenado con px
        // "$" + 4 + 5 // devuelve $ concatenado con la suma de 4 + 5 = 9 
        // "4" - 2      //devuelve 2
        // "4px" - 2  // devuelve Nan ya que js no sabe que es 4px por lo tanto no lo puede operar
        // 7 / 0    // devuelve Infinity, todo numero divido entre cero da infinito
        // {}[0]  // devuelve undefined
        // parseInt("09") // devuelve 9 ya que el string 09 lo pasa como numero
        // 5 && 2 // ambos valores son verdaderos por tanto devuelve el ultimo valor de la expresion 2
        // 2 && 5 // lo mismo pero devuelve 5 en este caso
        // 5 || 0 // devuelve 5 true
        // 0 || 5 //devuelve 5 true
        // [3]+[3]-[10] // devuelve 24
        // 3>2>1 // desigualdad devuelve false
        // [] == ![] //devulve true

//----------- Ejercicio 7 --------------//

        // function test() {
        //     console.log(a);
        //     console.log(foo());
        
        //     var a = 1;
        //     function foo() {
        //     return 2;
        //     }
        // }
        
        // test();
    // undefined ya que la variable aun no se encuentra declarada,deberia estar de primero en la funcion o como variable global
    // 2

//----------- Ejercicio 8 --------------//

    // var snack = 'Meow Mix';

    // function getFood(food) {
    //     if (food) {
    //         var snack = 'Friskies';
    //         return snack;
    //     }
    //     console.log(snack);
    //     return snack;
        
    // }

    // getFood(false);
  
    //devuelve undefind ya que no hay nadaque retornar

//----------- Ejercicio 9 --------------//

        // var fullname = 'Juan Perez';
        // var obj = {
        //    fullname: 'Natalia Nerea',
        //    prop: {
        //       fullname: 'Aurelio De Rosa',
        //       getFullname: function() {
        //          return this.fullname;
        //       }
        //    }
        // };

        // console.log(obj.prop.getFullname());

        // var test = obj.prop.getFullname;

        // console.log(test());

// devuel primero 'Aurelio De Rosa'
// console.log(test()); devuel undefined ya que test no es ninguna funcion

//----------- Ejercicio 10 --------------//

    function printing() {
        console.log(1);
        setTimeout(function() { console.log(2); }, 1000);
        setTimeout(function() { console.log(3); }, 0);
        console.log(4);
    }
    
    printing();

// 1 , 4 , 3, 2