//Ejercicio 1
var n1 = 20;
var n2 = 3;
var operacion = "suma";
var total;

if (operacion == "suma") {
    total = n1 + n2;    
} else { 
    total = n1 + n2;   
}
if (operacion == "division") {
    total = n1 / n2;    
} else { 
    total = n1 * n2;   
}

console.log(total);


//Ejercicio 2
var edad = 22;
if ( edad => 18 ) {
    console.log("Felicidades eres mayor de edad");
    console.log("Puedes tramitar tu INE");    
} else {
    console.log("Eres menor de edad");
}


//Ejercicio 3
var calificacion = 10

if (calificacion >= 10) {
    console.log("Felicidades estas aprobado");  
} else { console.log("Estas reprobado")
    
}


//Ejercicio 4
var monto = 15001;
if (monto > 15000) {
    console.log("Compra una moto");
    
} else { console.log("Recauda mas dinero");   

}

//Ejercicio 5
var numer1 = 15
var numer2 = 26

if (numer1 > numer2) {
    console.log("El primer numero es mayor que es segundo");
    
} else { console.log("El segundo numero es mayor que es primero");
    
}


//switch

//Ejercicio 1
var dia = 3;

switch (dia) {
    case 1:
        console.log("Es lunes dia laboral");
        break;
    case 2:
        console.log("Es martes dia laboral");
        break;
    case 3:
        console.log("Es miercoles dia laboral");
        break; 
    case 4:
        console.log("Es jueves dia laboral");
        break;
    case 5:
        console.log("Es viernes dia laboral");
        break;
    case 6:
        console.log("Es sabado dia NO laboral");
        break;
    case 7:
        console.log("Es domingo dia NO laboral");
        break;
    default:
        console.log("Ingresa un mero menor");
        break;
}


//Ejercicio 2
var expr = 'Platanos';
switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que te quisiera consultar?");


//Ejercicio 3
var dia = 0;

switch(dia){
	case 0:
		console.log("domingo");
		break;
	case 1:
		console.log("lunes");
		break;			
	case 2:
		console.log("martes");
		break;			
	case 3:
		console.log("miercoles");
		break;			
	case 4:
		console.log("jueves");
		break;			
	case 5:
		console.log("viernes");
		break;			
	case 6:	
        console.log("sabado");;
		break;	
	default:
		console.log("ERROR,Agregue otro valor");					
}


//Ejercicio 4
var Animal = 'Jirafa';
switch (Animal) {
  case 'Vaca':
  case 'Jirafa':
  case 'Perro':
  case 'Cerdo':
    console.log('Este animal subirá al Arca de Noé.');
    break;
  case 'Dinosaurio':
  default:
    console.log('Este animal no lo hará.');
}


//Ejercicio 5
var persona ='Carmen'

switch (persona) {
    case 'Brenda':
        console.log("Hola Brenda BIENVENIDA");
        break;
    case 'Brenda':
        console.log("Hola Sofia BIENVENIDA");
        break;

    default:
        console.log("PERSONA NO IDENTIFICADA");
        break;
}

//COMBINADOS
//Ejercicio 1
var dia = '25';

if (dia <= 31) {
    switch (dia) {
        case 15:
            console.log("Es quincena DIA DE PAGO");
            break;
        case 30:
            console.log("Es quincena DIA DE PAGO");
            break;
        default:
            console.log("Es un dia del mes pero no corresponde a pago");
            break;
    }
} else {
    console.log("Es un numero fuera de rango");
    
}


//Ejercicio 2
var val1 = 12;
var val2 = 15;
var total = 0;

total = val1 - val2

if (total > 0 ) {
    console.log("Tu respuesta un valor valido");
    
} else { console.log("Tu respuesta es negativa INGRESA VALORES DIFERENTES");
    
}

switch (total) {
    case 100:
        console.log("Tu valor es muy alto");
        break;

    default: 
        console.log("Tu valor esta dentro de rango");
        break;
}


//Ejercicio 3
var Producto = 'lacteo';
var cantidad = 5;

switch (Producto) {
    case 'frutal': 
        console.log("Requieres de un fruto de un fruto");
        break;
    case 'lacteo':
        console.log("Requieres una vaca");
        break;
    default:
        console.log("No pertenece a la categoria");
        break;
}

if (cantidad < 10) {
    console.log("La materia prima es suficiente");

} else { console.log("Busca mayor materia prima");

}


//Ejercicio 4
var persona = 'Juan';
var edad = '20';
var mes = 'octubre';
if (edad >= '18') {
    console.log("Eres mayor de edad continua tu proceso");
    switch (mes) {
        case 'marzo':
        case 'abril':
        case 'mayo': 
            console.log("Tu cumpleaños es en primavera");            
            break;
        case 'junio':
        case 'julio':
        case 'agosto':
            console.log("Tu cumpleaños es en verano");            
            break;
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            console.log("Tu cumpleaños es en otoño");            
            break;
        case 'diciembre':
        case 'enero':
        case 'febrero':
            console.log("Tu cumpleaños es en invierno");            
            break;
        default:
            console.log("TU MES NO EXISTE");
            break;
    }
} else {
    console.log("Espera a cumplir la mayoria de edad");
    
}

//Ejercicio 5
var num = '5';

if (num <= '7') {
    switch (num) {
        case '1':
            console.log("Es lunes y debes laborar");
            break;
        case '2':
            console.log("Es martes y debes laborar");
            break;
        case '3':
            console.log("Es miercoles y debes laborar");
            break;
        case 4:
            console.log("Es jueves y debes laborar");
            break;
        case '5':
            console.log("Es viernes y debes laborar");
            break;
        case '6':
            console.log("Es sabado descansa y difruta tu dia");
            break;
        case '7':
            console.log("Es domingo descansa y difruta tu dia");
            break;
        default:
            console.log("selecciona otro numero");
            break;
    }
} else { console.log("Tu valor es fuera de rango");   
}