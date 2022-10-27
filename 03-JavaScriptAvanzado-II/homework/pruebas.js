var instructor = {
    nombre: "Franco",
    edad: 25,
  };
  
  var alumno = {
    nombre: "Juan",
    curso: "FullStack",
  };
  
  function getNombre() {
    return this.nombre;
  }
  
  /*
    Ejercicio 3
  
    IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  
    Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
  */
  
  let getNombreInstructor;
  let getNombreAlumno;
    
getNombreInstructor = getNombre.bind(instructor);
console.log(getNombreInstructor());

getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreAlumno());

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
  }
  
  let textoAsteriscos;
  let textoGuiones;
  let textoUnderscore;

  textoAsteriscos = crearCadena.bind(null,"*","*","Hola");
  console.log(textoAsteriscos());

  textoGuiones = crearCadena.bind(null,"-","-","Hola");
  console.log(textoGuiones());

  textoUnderscore = crearCadena.bind(null,"_","_","Hola");
  console.log(textoUnderscore());