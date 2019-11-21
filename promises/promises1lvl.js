// Vamos a crear una promesa
// Esta promesa recibe una callback function
// la función call back toma dos argumentos, la primera es la response, la segunda es un reject (not full fill).

let promiseToCleanTheRoom = new Promise(function(res, rej) {
  // Cleaning the room
  let isClean = false; // Cambiar el valor de esta variable para que sea reject or response

  if (isClean) {
    // el argumento que se le da a res va a ser el mismo que reciba la función callback cuando se ejecute el metodo then
    // en este caso es fromResolve
    res("Clean");
  } else {
    rej("not Clean");
  }
});

// llamamos la funcion con el metodo then que se ejecutará después de que la promesa fue realizada.
// Se le vuelve a pasar una función callback a then en cas de response.
promiseToCleanTheRoom
  .then(function(fromResolve) {
    console.log("The room is " + fromResolve);
  })
  .catch(fromReject => {
    console.log("The room is " + fromReject);
  });
