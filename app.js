//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Por favor ingresa un número del 1 al 10';
let numeroSecreto = 0;
let cantidadIntentos = 0;
console.log(numeroSecreto);
//lista o arreglo para que no se repita el mismo numero anterior
let numerosSorteados = [];
let numeroMaximo = 10;
/*
function intentoDeUsuario(){
    alert("Click en el botón intentar");
}
*/

//PARA QUE UNA VAIRABLE SEA GENERICA
function asignarTextoElemnto (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
//ahora llamamos la funcion
asignarTextoElemnto('h1', 'Juego del número Secreto');
asignarTextoElemnto('p', 'Digite un numero del 1 al 10');
//Creamos una funcion para guardar los mensajes iniciales

//Para poner un numero aleatorio con function stetament
function generarNumeroSecreto() {
    //esta es una practica pero no es muy recomendada
    //let numeroSecreto = math.floor(math.random()*10)+1; //utilizamos math floor para que no sea decimal y +1 para se inicie en 1
    //return numeroSecreto; //Es importante retornar

    //Por lo que es mejor hacer esto
    //return Math.floor(Math.random()*10)+1;
    //ya no retornamos, por lo que colocamos lo siguiente
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //Si ya sorteamos todos los números
    if(numerosSorteados.length == 10){
      //llamamos la funcion
      asignarTextoElemnto('p', 'Ya se sortearon todos los números posibles');
    }else{
      //Si el numero generado está incluido en la lista hacemos lo siguiente
      if(numerosSorteados.includes(numeroGenerado)){
        //retornamos la misma funcion para que nos devuelva un valor
        return generarNumeroSecreto();
      }else{
        //Agregamos a la lista el número generado
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
}

function verificarIntento(){
    //esto es un string porque no está convertido en un numero
    //let numeroDeUsuario = document.getElementById('valorUsuario').value;
    //Convertimos a number
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario); console.log(typeof(numeroDeUsuario)); console.log(numeroSecreto); console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario == numeroSecreto);
    //el triple igual es para que valide si es igual tanto en numero como en tipo 
    //console.log(numeroDeUsuario === numeroSecreto);

    //Se puede usar con el else if, pero tambien se puede colocar las otras condiciones solo en el else con otro if
    if (numeroDeUsuario === numeroSecreto){
      asignarTextoElemnto('p',`Muy bien, acertaste el número en ${cantidadIntentos} ${(cantidadIntentos===1)?'vez':'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled'); //Removemos el atributo disabled del boton Nuevo Juego
    }else{
      //El usuario no acerto
      if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemnto('p', 'El numero es menor');
      }else{
        asignarTextoElemnto('p', 'El numero es mayor');
      }
      cantidadIntentos++;
      limpiarCaja(); //Llamamos a la funcion limpiar para que limpie la caja
    }
}

function limpiarCaja(){
  //let valorCaja = document.querySelector('#valorUsuario'); //Para llamar input con id
  //valorCaja = ''; //valor caja igual a vacio

  //tambien se puede hacer asi, de forma sintetizada
  document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
  //llamamos la funcion asignarTextoElemnto
  asignarTextoElemnto('h1', 'Juego del número secreto');
  asignarTextoElemnto('p', `Digite un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  cantidadIntentos = 1;
}

function reiniciarJuego(){
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números,Generar el número aleatorio, Inicializar el número de intentos
  condicionesIniciales(); //llamamos la funcion de condiciones iniales
  //Desabilitar el boton nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//Llamamos la funcion para que tome el numero secreto con la otra funcion del numero aleatorio y el contador
condicionesIniciales();