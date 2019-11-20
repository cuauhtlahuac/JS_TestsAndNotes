function saludar(name, callback, secondCallback) {
  // llamar algo que no existe, aquí se llama la función
  console.log("Antes de callback");
  callback(name);
  console.log("después de callback");
  secondCallback(name);
  console.log("after 2nd callback name: " + name);
}

function saludo(name) {
  function myFunc(num) {
    if (num <= 0) {
      return console.log("finished");
    }
    console.log("Que show " + name + " | . _ . |");
    myFunc(num - 1);
  }
  return myFunc(100);
}
saludar(
  "Yeyo Arris", // Aquí solo estamos pasando la definición de la función
  saludo,
  function(name) {
    // set time out no funciona para callbacks
    return setTimeout(function() {
      console.log("|>setTimeOut Good bye " + name + " ( * _ * )");
    }, 2000);
  }
);

//STACK: 1.- Callback 2.-

/*
// callbacks como funciones nombradas

// variable global

var allUsers = [];

// funcion de logueo (console.logs) genérica

function logStuff(data) {
  if ("string" == typeof data) return console.log(data);
  if ("object" == typeof data) {
    for (var key in data) {
      console.log(key + ":" + data[key]);
    }
  }
}

// Una función recibe dos parametros; el segundo es un callback
// 'getInput' no le importa que función le van a pasar como callback
function getInput(input, callback) {
  allUsers.push(input);
  "function" == typeof callback && callback(input);
}

// Llamamos a 'getInput' con 'logStuff' como parametro
// Así 'LogStuff' era ejecutada ('callBack') dentro de la función 'getInput'

getInput({ user: "gvaliron", speciality: "javascript" }, logStuff);
*/
