// función principal variable para contar respueatas correctas
console.log('conectado');
const contenedor = document.getElementById("caja");

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
    prompt: '1. En el sexenio de qué presidente se presenta el Movimiento Estudiantil de 1968, que culminó con la sangrienta matanza en la Plaza de las 3 Culturas\n (a) Carlos Salinas de Gortari\n (b) Gustavo Díaz Ordaz\n (c) Vicente Fox Quesada\n',
    answer1: "b" 
    },
    //si no, es alertar incorrecto
  
    {
    prompt: '2. ¿Qué expresidente mexicano fue el responsable de la peor devaluación económica en la historia de México, se privatizó la Banca Nacional, Telefonos de México y ademas es el principal sospechoso de asesinato al candidato ganador de su mismo partido?\n (a) Ernesto Zedillo Ponce de león\n (b) Luis Donaldo Colosio\n (c) Carlos Salinas de Gortari\n',
    answer2: "c"
    },
 
    {
    prompt: '3. ¿Qué expresidente es el responsable de desatar la violencia en todo el país, declarando la guerra al "narco"?\n (a) Vicente Fox Quesada\n (b) Enrique Peña Nieto\n (c) Felipe Calderon Hinojosa\n',
    answer3: "c"
    },

    {
    prompt:'4. ¿Qué presidente mexicano es víctima de burlas a nivel global, reconocido como el presidente mas tonto en la historia de México y el responsable de la desmantelación de Pemex?\n (a) Miguel de la Madrid\n (b) Enrique Peña Nieto\n (c) Luis Echeverría Alvarez\n ',
    answer4: "b"
    },

    {
    prompt: '5. Es conocido como el presidente que vendio más de la mitad del territorio Mexicano, heroe para unos y villano para otros\n (a) Benito Juarez\n (b) Carlos Slim\n (c) Antonio Lopez de Santa Ana\n ',
    answer5: "c" 
    }, 

    {
    prompt: '6. Es conocido como el presidente alcoholico de méxico, asistiendo en estado alcoholico a conferencias, reuniones y entrevistas en su periodo de mandato\n (a) Benito Juarez\n (b)Felipe Calderón\n (c) AMLO\n ',
    answer6: "b" 
    },    

    {
    prompt: '7. Mientras esra secretario de gobernación y durante su mandato fué colaborador de la CIA orquestando las más cruentas redaddas y desapariciones al estilo Yankee\n (a) Gustavo Díaz Ordaz\n (b) Carlos Slim\n (c) AMLO\n ',
    answer7: "a" 
    },

    {
    prompt: '8. Este presidente es relacionado con grupos criminales en México y E.U. permitiendo el tráfico de armas para armar a Carteles delictivos, este operativo fue com¡nocido como rápido y furuiso \n (a) Benito Juarez\n (b) Felipe Calderón\n (c) Antonio Lopez de Santa Ana\n ',
    answer8: "b"
    },

    {
    prompt: '9. Todos los expresidentes con excepcion de 3 que no se mencionan en esta trivia, provienen de 3 universidadesestadounidenses ¿sabes cuales són? \n (a) Harvard, Yale y Oxford\n (b) Unam, Uam y Poli\n (c) Oruro, CDJNG, EZLN\n ',
    answer9: "a"
    },
     
    {
    prompt: '10. Responsable de la rcreación del PRI y Televisa, con la unica inteción de mantenerse en el poder \n (a) Miguel Aleman\n (b) Miguel de la Madrid\n (c) Antonio Lopez de Santa Ana\n ',
    answer10: "a"
    },  

  ];
    //imprime la puntuación en pantalla
    // detabla de puntuación 
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
    
    
    document.getElementById("resultados").style.display = "block";
    var pintarResultado = document.getElementById("caja");
    pintarResultado.innerHTML = ( nombre  + "  Tu puntuación es  " + score + " / " + preguntas.length);
    
   


   //se sale del programa si no acepta
   } else {
     alert("Tal vez en otro momento...");
   }   
   
  
  


  
};