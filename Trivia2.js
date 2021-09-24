// función principal variable para contar respueatas correctas
console.log('conectado');
const contenedor = document.getElementById("caja");
const resultadoTriv = document.getElementById("resultados");
//inicia la función al dar ckick en enviar y se desplega la trivia
function saludo() {
  var nombre = document.getElementById("name").value;
  alert("Hola  " + nombre + " , ¿Sabes cuales son los presidentes de México que mas daño han echo al país?");
  
  var jugar = confirm('¿Deseas jugar ahora la Trivia de los Peores presidentes de México? ');
  
//condicional si acepta jugar, inicia la trivia, si no sale del programa 
  if (jugar == true) {
  alert("Instrucciones: Escribe la letra minúscula de la respuesta correcta, puedeser a,b o c y da CLICK o presiona ENTER ");      
    //Inicia la pregunta 1
    var preguntas = [
    {
    prompt: 'En el sexenio de qué presidente se presenta el Movimiento Estudiantil de 1968, que culminó con la sangrienta matanza en la Plaza de las 3 Culturas\n (a) Carlos Salinas de Gortari\n (b) Gustavo Díaz Ordaz\n (c) Vicente Fox Quesada\n',
    answer: "b" 
    },
    //si no, es alertar incorrecto
  
    {
    prompt: '¿Qué expresidente mexicano fue el responsable de la peor devaluación económica en la historia de México, se privatizó la Banca Nacional, Telefonos de México y ademas es el principal sospechoso de asesinato al candidato ganador de su mismo partido?\n (a) Ernesto Zedillo Ponce de león\n (b) Luis Donaldo Colosio\n (c) Carlos Salinas de Gortari\n',
    answer: "c"
    },
 
    {
    prompt: '¿Qué expresidente es el responsable de desatar la violencia en todo el país, declarando la guerra al "narco"?\n (a) Vicente Fox Quesada\n (b) Enrique Peña Nieto\n (c) Felipe Calderon Hinojosa\n',
    answer: "c"
    },

    {
    prompt:'¿Qué presidente mexicano es víctima de burlas a nivel global, reconocido como el presidente mas tonto en la historia de México y el responsable de la desmantelación de Pemex?\n (a) Miguel de la Madrid\n (b) Enrique Peña Nieto\n (c) Luis Echeverría Alvarez\n ',
    answer: "b"
    },

    {
    prompt: 'Es conocido como el presidente que vendio más de la mitad del territorio Mexicano, heroe para unos y villano para otros\n (a) Benito Juarez\n (b) Carlos Slim\n (c) Antonio Lopez de Santa Ana\n ',
    answer: "c" 
    }, 

    {
    prompt: 'Es conocido como el presidente alcoholico de méxico, asistiendo en estado alcoholico a conferencias, reuniones y entrevistas en su periodo de mandato\n (a) Benito Juarez\n (b)Felipe Calderón\n (c) AMLO\n ',
    answer: "b" 
    },    

    {
    prompt: 'Privatizo lagos, lagunas y rios, vendiéndolos a refresqueras y cerveceras, dijo que la Coca-Cola era un alimento saludable y la recomienda a todos los mexicanos\n (a) Enrique Peña Nieto\n (b) Carlos Slim\n (c) AMLO\n ',
    answer: "a" 
    },

    {
    prompt: '\n (a) Benito Juarez\n (b) Carlos Slim\n (c) Antonio Lopez de Santa Ana\n ',
    answer: "c"
    },
  ];
    //imprime la puntuación en pantalla
    
    var score = 0;

    for(var i = 0; i < preguntas.length; i++){
     var respuesta = window.prompt(preguntas[i].prompt);
     if(respuesta == preguntas[i].answer){
          score++;
          alert("Correcto!");
     } else {
          alert("xX Inorrecto Xx");
     }
   }
    
    var pintarResultado = document.getElementById("caja");
    pintarResultado.innerHTML = (nombre + "Tu puntuacion es " + score + "/" + preguntas.length);
   


   } else {
     alert("Tal vez en otro momento...");
   }   
   
  




  
  
  //alerta de puntuación 
  
  //se sale del programa si no acepta


  
};
