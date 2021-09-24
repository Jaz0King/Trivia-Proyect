// función principal variable para contar respueatas correctas
console.log('conectado');
var contador = 0;

function saludo() {
  var nombre = document.getElementById("name").value;
  alert("Hola  " + nombre + " , ¿Sabes cuales son los presidentes de México que mas daño han echo al país?");
  var jugar = confirm('¿Deseas jugar ahora la Trivia de los Peores presidentes de México? ');
  
//condicional si acepta jugar, inicia la trivia, si no sale del programa 
 if (jugar == true) {
  alert("Instrrucciones: Preguntas de opcion múltiple. Escribe la letra minúscula de la respuesta correcta, puedeser a,b o c y da CLICK o presiona ENTER ");      
    //Inicia la pregunta 1
  var pre1 = prompt('En el sexenio de qué presidente se presenta el Movimiento Estudiantil de 1968, que culminó con la sangrienta matanza en la Plaza de las 3 Culturas\n (a) Carlos Salinas de Gortari\n (b) Gustavo Díaz Ordaz\n (c) Vicente Fox Quesada\n');
     //condicional si la pregunta 1 es correcta   
    if (pre1 == "b") {
     alert("¡Correcto!, el responsable directo de la matanza estudiantil en Tlatelolco en 1968 fue Gustavo Díaz Ordaz");
     contador++;
     console.log(contador);
    } 
    else { //si no, es alertar incorrecto
      alert('xX Incorrecto Xx');
    };

  var pre2 = prompt('¿Qué expresidente mexicano fue el responsable de la peor devaluación económica en la historia de México, se privatizó la Banca Nacional, Telefonos de México y ademas es el principal sospechoso de asesinato al candidato ganador de su mismo partido?\n (a) Ernesto Zedillo Ponce de león\n (b) Luis Donaldo Colosio\n (c) Carlos Salinas de Gortari\n' );
    if (pre2 == "c") { 
     alert("!Correcto¡  Salinas de Gortari es conocido como el padre de la devaluacion de la moneda mexicana, fraudes institucionales como el Fobaproa, premiado en Estados unidos por universidades como un gran lider inversionista, ha escrito varios libros a favor del capitalismo salvaje.");
     contador++;
     console.log(contador);  
    } 
    else {
      alert('xX Incorrecto Xx');
    }

  var pre3 = prompt('¿Qué expresidente es el responsable de desatar la violencia en todo el país, declarando la guerra al "narco"?\n (a) Vicente Fox Quesada\n (b) Enrique Peña Nieto\n (c) Felipe Calderon Hinojosa\n' );
    if (pre3 == "c") {
     alert("!Correcto¡Felipe Calderón es conocido como el presidente que declara la guerra al narcotrafico, generando exponencialmente la vilencia con grupos delictivos del crimen organizado trabajando en completa impunidad.");
     contador++;
     console.log(contador);
    } 
    else {
     alert('xX Incorrecto Xx ');
    }

  var pre4 = prompt('¿Qué presidente mexicano es víctima de burlas a nivel global, reconocido como el presidente mas tonto en la historia de México y el responsable de la desmantelación de Pemex?\n (a) Miguel de la Madrid\n (b) Enrique Peña Nieto\n (c) Luis Echeverría Alvarez\n ');
    if (pre4 == "b") {
     alert('Correcto! El presidente con más memes en la historia de un país será recordado comom el títere mas descarado del Salinato');
     contador++;
     console.log(contador);
    } 
    else { 
      alert ('xX Incorrecto Xx');
    }

  var pre5 = prompt('Es conocido como el presidente que vendio más de la mitad del territorio Mexicano, heroe para unos y villano para otros\n (a) Benito Juarez\n (b) Carlos Slim\n (c) Antonio Lopez de Santa Ana\n ');
    if (pre5 == "c" ) {
      alert('Es verdad! Santa Ana es conocido como el presidente que vendió casí la mitad del territorio nacional a los vecinos Estados Unidos, algunos otros historiadores reconocidos creen que fue obligado a hacerlo bajo la amenaza de invadir y apropiarse por fuerza.')
      contador++;
      console.log(contador);
    }
     else { 
      alert ('xX Incorrecto Xx');
    }
  
    var pre6 = prompt('Es conocido como el presidente alcoholico de méxico, asistiendo en estado alcoholico a conferencias, reuniones y entrevistas en su periodo de mandato\n (a) Benito Juarez\n (b)Felipe Calderón\n (c) AMLO\n ');
    if (pre6 == "b" ) {
      alert('Es verdad! Felipe Calderon Hinojosa es conocido por su grán adicción al alcohol, faltando al respeto de todos los mexicanos asisitiendo a sus discursos, conferencias o entrevistas en estado etílico sin preocuparle el disumular.')
      contador++;
      console.log(contador);
    }
     else { 
      alert ('xX Incorrecto Xx');
    }    

    var pre7 = prompt('Privatizo lagos, lagunas y rios, vendiéndolos a refresqueras y cerveceras, dijo que la Coca-Cola era un alimento saludable y la recomienda a todos los mexicanos\n (a) Enrique Peña Nieto\n (b) Carlos Slim\n (c) AMLO\n ');
    if (pre7 == "a" ) {
      alert('Es verdad! Enrique Peña Nieto fué objeto de burlas al no conocer los ingredientes de la coca-cola, su sexenio fue reconocido como el mayor privatizador de lagos, lagunas, ríos y playas')
      contador++;
      console.log(contador);
    }
     else { 
      alert ('xX Incorrecto Xx');
    }

    var pre8 = prompt('\n (a) Benito Juarez\n (b) Carlos Slim\n (c) Antonio Lopez de Santa Ana\n ');
    if (pre8 == "c" ) {
      alert('Es verdad! Santa Ana es conocido como el presidente que vendió casí la mitad del territorio nacional a los vecinos Estados Unidos, algunos otros historiadores reconocidos creen que fue obligado a hacerlo bajo la amenaza de invadir y apropiarse por fuerza.')
      contador++;
      console.log(contador);
    }
     else { 
      alert ('xX Incorrecto Xx');
    }

    //imprime la puntuación en pantalla
    console.log(contador);
    var pintarResultado = document.getElementById("caja");
    pintarResultado.innerHTML = nombre + "  Tu puntuacion es  " + contador + "  de 5 vuelve a interntarlo y mejora tu puntuacion, compite con  tus amigos =) ";
    console.log(pintarResultado);
  
  //alerta de puntuación 
  
} //se sale del programa si no acepta

  else {
     alert("Tal vez en otro momento...");
  }
};
  
